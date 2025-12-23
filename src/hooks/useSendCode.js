import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../API/axiosInstance";

export default function useSendCode() {
    const [serverErrors, setServerErrors] = useState([]);
    const navigate = useNavigate();

    const sendCodeMutation = useMutation({
        mutationFn: async (values) => {
            return await axiosInstance.post("/Auth/Account/SendCode", values);
        },
        onSuccess: () => {
            navigate("/auth/reset-password");
        },
        onError: (err) => {
            setServerErrors(err.response.data.errors);
        },
    });

    return { serverErrors, sendCodeMutation };
}
