import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../API/axiosInstance";

export function useFetch(queryKey, url){
    const fetchData = async()=>{
      const response = await axiosInstance.get(url);
      return response.data;
    }
  const query = useQuery({
    queryKey,
    staleTime:5*60*1000,
    queryFn: fetchData
  })
  return query;
}