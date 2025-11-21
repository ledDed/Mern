// import {create} from "zustand";

// const useProductStore = create((set)=>({
//     products:[],
//     setProducts: (products) => set({products}),
//     createProduct: async (newProduct) => {
//         if(!newProduct.name||!newProduct.image||!newProduct.price){
//             return {success:false,message:"fill all fields"};
//         }
//         const res = await fetch("/api/products",{
//             method:"POST",
//             headers:{
//                 "Content-type":"application/json",
//             },
//             body:JSON.stringify(newProduct),
//         })
//         const data = await res.json()
//         set((state)=>({products:[...state.products,data.data]}))
//         return {success:true,message:"Product created"}

//     }
// }))
// export default useProductStore

/**
 * create: This function creates the store. It returns a custom hook (named useProductStore) that you can call inside any React component to access the data or functions defined here.

set: This is a function provided by Zustand to update the state. When you call set, Zustand merges the new data and triggers a re-render in any component using this store.
 */

import { create } from "zustand";

// Changed to "export const" so you can import it as { useProductStore }
export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    getProducts: async () => {
        try {
            const res = await fetch("/api/products");
            const data = await res.json();
            if (!res.ok) {
                return { success: false, message: "Failed to fetch products" };
            }
            set({ products: data.data });
            return { success: true, message: "Products fetched", data: data.data };
            
        } catch (error) {
            console.error("Error fetching products:", error);
            return { success: false, message: "Server Error" };
        }
    },
    createProduct: async (newProduct) => {

        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return { success: false, message: "Please fill in all fields." };
        }

        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });

        const data = await res.json();

        if (!res.ok) {
            return { success: false, message: data.message || "Server Error" };
        }


        set((state) => ({ products: [...state.products, data.data] }));
        
        return { success: true, message: "Product created successfully" };
    }
}));
