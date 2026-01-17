import { useNavigate } from "react-router-dom";
import axiosInstance from "../API/axiosInstance";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../store/authStore";
import { jwtDecode } from "jwt-decode";

export default function useLogin() {
    const [serverErrors, setServerErrors] = useState([]);
    const navigate = useNavigate();
    const setToken = useAuthStore((state)=>state.setToken);
    const setUser = useAuthStore((state)=>state.setUser);
    const loginMutation = useMutation({
        mutationFn: async (values) => {
            return await axiosInstance.post("/Auth/Account/Login", values)
        },
        onSuccess: (res) => {
            const decoded = jwtDecode(res.data.accessToken);
            const user = {
                name: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
                role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
            }
            setToken(res.data.accessToken);
            setUser(user);
            navigate("/");
        },
        onError: (err) => {
            const data = err.response.data;
            const message = data.message;
            const errors = data.errors;

            if (Array.isArray(errors) && errors.length) setServerErrors(errors);
            else if (message) setServerErrors([message]);
            else setServerErrors(["Login failed"]);
        }
    });
return { serverErrors, loginMutation };
}