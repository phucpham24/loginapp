import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8080'
});

instance.interceptors.response.use(function(response) {
  // console.log("check response",response.data)
  // console.log("check status",response.status)
  // console.log("check response",response)
  // console.log("check statusText",response.data.message)
  return response.data ? response.data : {statusCode: response.status, message: response.data.message};
}, function(error) {

    let res = {};
      // console.log(error.message);
      // console.log(error.response);
  if (error.response) {
    res.data = error.response.data;
    res.status = error.response.status;
    res.headers = error.response.headers;

  }else if (error.request){
    console.log(error.request);
  }else{
    console.log('error', error.message)
  }
  return res;
});

export default instance