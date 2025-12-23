import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../API/axiosInstance";

export default function useResetPassword() {
    const [serverErrors, setServerErrors] = useState([]);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const resetPasswordMutation = useMutation({
        mutationFn: async (values) => {
            return await axiosInstance.patch("/Auth/Account/ResetPassword", values);
        },
        onSuccess: () => {
            setSuccess(true);
            setTimeout(() => {
                navigate("/auth/login");
            }, 2000);
        },
        onError: (err) => {
            setServerErrors(err.response.data.errors);
        },
    });

    return { serverErrors, success, setSuccess, resetPasswordMutation };
}
