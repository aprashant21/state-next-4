import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "../../../../../firebase/firebase";

export async function PATCH(request, { params }) {
    try {
        const res= await request.json();
        const { id } = params;
        const productRef = doc(db, "products", id);
        await updateDoc(productRef, res);
        return NextResponse.json({ message: `successfully updated the document of document id ${productRef.id}`, status: 200 })
    } catch (error) {
        return NextResponse.json({ error: `${error}`, status: 400 })
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = params;
        const productRef = doc(db, "products", id)
        await deleteDoc(productRef);
        return NextResponse.json({ message: `successfully deleted the document of document id ${productRef.id}`, status: 200 })

    } catch (error) {
        return NextResponse.json({ error: `${error}`, status: 400 })

    }
}

export async function GET(request,{ params }) {
    try {
        const { id } = params;

        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            // docSnap.data() will be undefined in this case
            return NextResponse.json({error: "No such document !", status: 400})
        }

        return NextResponse.json({ message: `success`, status: 200,data: docSnap.data()  })

    } catch (error) {
        throw new Error(`${error}`)
    }
}