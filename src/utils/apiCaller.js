import axios from "axios";
import * as config from "../redux/constants/config";

const apiCaller = (endpoint, method, body = null) => {
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body
    })
    .catch(error => {
        console.log(error);
    })
}

export default apiCaller;

