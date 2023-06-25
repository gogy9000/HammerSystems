import axios from "axios";
import {API_BASE_URL} from "../../../constants/ApiConstant";

const baseURL = `${API_BASE_URL}`;

export const protectedInstance = axios.create({
    baseURL,
    timeout:60000
});

protectedInstance.interceptors.request.use((config) => {
    //some auth logic
    return config
})

protectedInstance.interceptors.response.use((res) => {
  return  res
},  (reject) => {

    //some api error logic
    return  Promise.reject(reject)
})