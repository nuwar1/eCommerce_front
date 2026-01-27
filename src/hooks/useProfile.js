import { useQuery } from "@tanstack/react-query";
import axiosAuthInstance from "../API/axiosAuthInstance";
import { useFetch } from "./useFetch";

export function useProfile() {
    return useFetch (["profile"], "/profile", axiosAuthInstance);
}


