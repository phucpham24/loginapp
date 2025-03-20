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

const deleteUser = (id)=> {
    return axios.delete(`/users/${id}`)
}

const loginApi = (username, password)=>{
    return axios.post('/login',{username, password})
}

export {fetchAllUser, postCreateUser, updateUser, deleteUser, loginApi};