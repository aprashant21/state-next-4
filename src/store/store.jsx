import productAPI from "@/features/api/productApi"
import todoSlices from "@/features/todoSlice"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        todos: todoSlices.reducer,
        products: productAPI.reducer
    },
    middleware:(getMiddleware)=>getMiddleware().concat(productAPI.middleware)
})