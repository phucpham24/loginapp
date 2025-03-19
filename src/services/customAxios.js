import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8080'
});

axios.interceptors.response.use(function(response) {
  return response.data;
}, function(error) {
  if (error.response.status === 401) {
    console.log("Unauthorized");
  }
  return Promise.reject(error);
});

export default instance