import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productAPI = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_BASE_URL
    }),
    tagTypes:['Products'],
    endpoints:(builder)=>({
        getProducts: builder.query({
            query:()=>'/api/products',
            providesTags: (result, error, arg)=>result ? [...result.map(({id})=>({type:'Products', id})), 'Products'] : ['Products'],
            transformResponse: (response)=>response.data
        }),
        addProduct: builder.mutation({
            query:(product)=>({
                url:'/api/products',
                method:'POST',
                body:product
            }),
            invalidatesTags:['Products']
        }),
        deleteProduct: builder.mutation({
            query:(id)=>({
                url:`/api/products/${id}`,
                method:'DELETE',
            }),
            invalidatesTags:(result, error, arg)=>[{type:'Products', id: arg.id}]
        })
    })
})


export const {useAddProductMutation, useGetProductsQuery, useDeleteProductMutation} = productAPI;
export default productAPI;