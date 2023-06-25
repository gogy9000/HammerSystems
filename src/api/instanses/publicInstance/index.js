import axios from "axios";
import {API_BASE_URL} from "../../../constants/ApiConstant";

const baseURL = `${API_BASE_URL}`;

export const publicInstance = axios.create({
    baseURL,
});