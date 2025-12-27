import { useNavigate } from "react-router-dom";
import axiosInstance from "../API/axiosInstance";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function useLogin() {
    const [serverErrors, setServerErrors] = useState([]);
    const navigate = useNavigate();
    const loginMutation = useMutation({
        mutationFn: async (values) => {
            return await axiosInstance.post("/Auth/Account/Login", values)
        },
        onSuccess: (res) => {
            const token = res?.data?.accessToken;
            if (token) localStorage.setItem("token", token);
            navigate("/");
        },
        onError: (err) => {
            const data = err?.response?.data;
            const message = data?.message;
            const errors = data?.errors;

            if (Array.isArray(errors) && errors.length) setServerErrors(errors);
            else if (message) setServerErrors([message]);
            else setServerErrors(["Login failed"]);
        }
    });
return { serverErrors, loginMutation };
}