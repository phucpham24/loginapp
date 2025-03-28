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
    return axios.post('/auth/login',{username, password},{ withCredentials: true })
}

const refreshToken = (accessToken)=>{
        return axios.get(`/auth/refresh`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    },{ withCredentials: true });
}

const getAccount = (accessToken)=>{
        return axios.get(`/auth/account`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    },{ withCredentials: true });
}

const Logout = (accessToken)=>{
        return axios.get(`/auth/logout`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    },{ withCredentials: true });
}

export {fetchAllUser, postCreateUser, updateUser, deleteUser, loginApi, refreshToken, getAccount, Logout };