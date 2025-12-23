import { useNavigate } from "react-router-dom";
import axiosInstance from "../API/axiosInstance";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function useRegister() {
    const [serverErrors, setServerErrors] = useState([]);
    const navigate = useNavigate();
    const registerMutation = useMutation({
        mutationFn: async (values) => {
            return await axiosInstance.post("/Auth/Account/Register", values)
        },
        onSuccess: () => {
            navigate("/auth/login");
        },
        onError: (err) => {
            setServerErrors(err.response.data.errors);
        }
    });
    return{serverErrors, registerMutation};
}