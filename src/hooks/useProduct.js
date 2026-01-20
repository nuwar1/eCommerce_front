import { useFetch } from "./useFetch";

export function useProduct(id){
      return useFetch(["product", id], `/Products/${id}`);
    }