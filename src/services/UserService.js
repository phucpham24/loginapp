// import axios from "axios";
import axios from "./customAxios";

const fetchAllUser = ()=> {
        return axios.get('/users')
}

export {fetchAllUser};