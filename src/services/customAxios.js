import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8080'
});

axios.interceptors.response.use(function(response) {
  console.log(response)
  return response.data ? response.data : {statusCode: response.status, message: response.statusText};
}, function(error) {
  if (error.response.status === 401) {
    console.log("Unauthorized");
    console.log(error);
  }
  return Promise.reject(error);
});

export default instance