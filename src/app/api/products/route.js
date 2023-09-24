import { addDoc, collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "../../../../firebase/firebase";

export async function GET() {
    try {
        const products = []
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            products.push({ id: doc.id, ...doc.data() })
        });
        return NextResponse.json({ message: "success", status: 200, data: products })
    } catch (error) {
        throw new Error(`${error}`)
    }
}

export async function POST(request) {
    try {
        const res = await request.json();
        const {title, description} = res;
        if(title === '' ) throw new Error('Title must not be empty');
        const products = {
            title,
            description,
        }

        const productRef = await addDoc(collection(db, "products"),products);
        return NextResponse.json({ message: `document successfully added with document id : ${productRef.id}`, status: 200, data: products })

    } catch (error) {
        throw new Error(`${error}`)

    }
}