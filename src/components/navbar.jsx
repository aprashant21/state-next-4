"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function CustomNavbar() {

    const path= usePathname();

    return (
        <div>
            <navbar className='flex justify-center mt-4 gap-4'>
                <Link href="/" className={`text-3xl font-bold  ${path === '/' ? 'border-b-4 border-green-800': ''}`}>Todo</Link>
                <Link href="/products" className={`text-3xl font-bold  ${path === '/products' ? 'border-b-4 border-green-800': ''}`}>Products</Link>
                </navbar>
        </div>
    )
}
