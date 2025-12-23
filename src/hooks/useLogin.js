import { useNavigate } from "react-router-dom";
import axiosInstance from "../API/axiosInstance";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function useLogin() {
    const [serverErrors, setServerErrors] = useState([]);
    const navigate = useNavigate();
    const loginMutation = useMutation({
        mutationFn: async (values) => {
            return await axiosInstance.post("/api/Auth/Account/Login", values)
        },
        onSuccess: (res) => {
            const token = res?.data?.accessToken;
            if (token) localStorage.setItem("token", token);
            navigate("/");
        },
        onError: (err) => {
            setServerErrors(err.response.data.errors);
        }
    });
    return { serverErrors, loginMutation };
}