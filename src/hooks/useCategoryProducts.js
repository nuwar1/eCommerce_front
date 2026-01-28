import { useFetch } from "./useFetch";

export default function useCategoryProducts(categoryId) {
    return useFetch(["categoryProducts", categoryId], `/Products/category/${categoryId}`);
}
