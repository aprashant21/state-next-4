"use client"
import { useDeleteProductMutation, useGetProductsQuery } from "@/features/api/productApi";

export default function Products() {
  const {data: products} = useGetProductsQuery();
  const [deleteProduct, status] = useDeleteProductMutation();

  if(status.isLoading) return <span className="flex justify-center mt-10 font-bold text-2xl">Loading...</span>
  return (
    <div>
      {
        products?.map((product) => {
          return <>
            <div className="bg-black text-white flex justify-around p-2 m-2 rounded-md">
              <div>
              <p>{product?.title}</p>
              <p>{product?.description}</p>
              </div>
              <p className="cursor-pointer text-2xl mt-2" onClick={()=>deleteProduct(product?.id)}>X</p>
            </div>
          </>
        })
      }
    </div>
  )
}
