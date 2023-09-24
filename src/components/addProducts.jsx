"use client"
import { useAddProductMutation } from "@/features/api/productApi"
import { useState } from "react"
export default function AddProduct() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [addProduct, status] = useAddProductMutation();

    const handleAddProduct=(e)=>{
        e.preventDefault();
        const product = {
            title, description
        }
        if(title === '') return alert('title must not be empty');
        addProduct(product);
        setTitle('');
        setDescription('');
    }

    return (
        <div>
            {JSON.stringify(addProduct)}
            <div className="flex justify-center m-10">
                <form action="">
                    <div className="grid">
                        <label htmlFor="input" className="text-2xl font-bold">Products</label>
                        <input placeholder="Enter a title..." onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="rounded h-10 text-md p-1 mt-1" />
                        <input placeholder="Enter a description..." onChange={(e) => setDescription(e.target.value)} value={description} type="text" className="rounded h-10 text-md p-1 mt-1" />
                        <button onClick={handleAddProduct} className="w-full bg-green-800 mt-4 text-white h-10 rounded hover:bg-green-900">Add Product</button>
                    </div>
                </form>

            </div>
            {status.isLoading ? <span className="flex justify-center mt-10 font-bold text-2xl">Loading...</span> : <></>}
        </div>
        )
}
