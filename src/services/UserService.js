// import axios from "axios";
import axios from "./customAxios";

// const fetchAllUser = ()=> {
//         return axios.get('/users')
// }

const fetchAllUser = (accessToken) => {
    return axios.get(`/users`, {
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
    });
};

const deleteUser = (id, accessToken) => {
    return axios.delete(`/users/${id}`, {
    });
};

const loginApi = (username, password)=>{
    return axios.post("/auth/login",{username, password})
}

const refreshToken = (accessToken)=>{
        return axios.get("/auth/refresh", {
    });
}

const getAccount = (accessToken)=>{
        return axios.get("/auth/account", {
    });
}

const Logout = (accessToken)=>{
        return axios.post("/auth/logout", 
            {});
}



export {fetchAllUser, postCreateUser, updateUser, deleteUser, loginApi, refreshToken, getAccount, Logout };