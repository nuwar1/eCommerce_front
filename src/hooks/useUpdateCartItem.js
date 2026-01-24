import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import axiosAuthInstance from '../API/axiosAuthInstance';

export default function useUpdateCartItem() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async({productId, count})=>
            await axiosAuthInstance.patch(`/carts/${productId}`, {count}),
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey:["carts"]})
        }
    })
}
