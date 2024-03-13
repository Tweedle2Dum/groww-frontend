import { StoreData } from "@/Types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
async function updateCart() :Promise <StoreData> {
    // Implementation of updating user cart

    //Add as needed, returns a Promise 
    return {} as StoreData

}

export default function useUpdateCart() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ()=>{
            return updateCart()
        },
        onSuccess : ()=>{},
        onError: ()=>{}
    })

  
}
