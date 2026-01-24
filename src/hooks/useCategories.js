import { useFetch } from "./useFetch";
import i18n from "../i18n";

export function useCategories(){
    return useFetch(["categories", i18n.language], "/Categories");
    }
