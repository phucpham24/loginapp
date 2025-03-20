// import axios from "axios";
import axios from "./customAxios";

// const fetchAllUser = ()=> {
//         return axios.get('/users')
// }

const fetchAllUser = (accessToken) => {
    return axios.get(`/users`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
};

const postCreateUser = (data)=> {
    return axios.post('/users', data)
}

// const updateUser = (data)=> {
//     return axios.put('/users', data)
// }

const updateUser = (data, accessToken) => {
    return axios.put(`/users`, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
};

const deleteUser = (id, accessToken) => {
    return axios.delete(`/users/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
};

const loginApi = (username, password)=>{
    return axios.post('/login',{username, password})
}

export {fetchAllUser, postCreateUser, updateUser, deleteUser, loginApi};