import axios from "axios";
import {baseURL} from "../utils/constant"
axios.defaults.withCredentials = true;

const instance= axios.create({
    baseURL:baseURL,
})

export default instance