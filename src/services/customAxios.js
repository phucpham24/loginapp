import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

// 🔁 Add token to all requests (except login or refresh)
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const isPublic =       
      (config.url === "/auth/login" && config.method === "post") ||
      (config.url === "/auth/refresh" && config.method === "get") ||
      (config.url === "/users" && config.method === "post");

    if (token && !isPublic) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

instance.interceptors.response.use(
  (response) => {
    return response.data
      ? response.data
      : { statusCode: response.status, message: response.data.message };
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      localStorage.getItem("token") &&
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/refresh", "/auth/login")
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token) => {
              originalRequest.headers["Authorization"] = `Bearer ${token}`;
              resolve(instance(originalRequest));
            },
            reject: (err) => reject(err),
          });
        });
      }

      isRefreshing = true;

      try {

        const res = await axios.get("http://localhost:8080/auth/refresh", {
          withCredentials: true,
        });

        const newToken = res.data.data.access_token;
        localStorage.setItem("token", newToken);
        console.log(">>>>>check token", res.data.data.access_token)
        console.log(">>>>>check token storage", localStorage.getItem("token"))
        processQueue(null, newToken);

        // Retry the original request with the new token
        originalRequest.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
        return instance(originalRequest);
      } catch (err) {
        processQueue(err, null);
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    // Your original error formatting
    let res = {};
    if (error.response) {
      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("error", error.message);
    }

    return Promise.reject(res);
  }
);

export default instance;
