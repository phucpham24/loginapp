// import axios from "axios";
import axios from "./customAxios";

const fetchAllUser = ()=> {
        return axios.get('/users')
}

const postCreateUser = (data)=> {
    return axios.post('/users', data)
}

const updateUser = (data)=> {
    return axios.put('/users', data)
}

export {fetchAllUser, postCreateUser, updateUser};