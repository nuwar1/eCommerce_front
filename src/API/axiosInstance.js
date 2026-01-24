import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://knowledgeshop.runasp.net/api",
    withCredentials: true,
});

axiosInstance.interceptors.request.use((config)=>{
    config.headers["Accept-Language"] = "en"
    return config;
})

export default axiosInstance;