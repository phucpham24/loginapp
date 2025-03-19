// import axios from "axios";
import axios from "./customAxios";

const fetchAllUser = ()=> {
        return axios.get('/users')
}

const postCreateUser = (data)=> {
    return axios.post('/users', data)
}

export {fetchAllUser, postCreateUser};