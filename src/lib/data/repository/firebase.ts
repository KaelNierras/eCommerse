import { Cart } from "@/lib/features/add_to_card/models/cart";
import { db } from "./firebaseConfig";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore"; 
import { addDoc, deleteDoc } from "firebase/firestore";

export const getAllProducts = async () => {
    const productsCollection = collection(db, "products");
    const productSnapshot = await getDocs(productsCollection);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList;
};

export const getAllCart = async () => {
    const cartCollection = collection(db, "cart");
    const cartSnapshot = await getDocs(cartCollection);
    const cartList = cartSnapshot.docs.map(doc => doc.data());
    return cartList;
};

export const getAllNewProducts = async () => {
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, orderBy("added_date", "desc"), limit(6));
    const productSnapshot = await getDocs(q);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList;
};

export const getMenProducts = async () => {
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("category", "==", "men"));
    const productSnapshot = await getDocs(q);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList;
};

export const getWomenProducts = async () => {
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("category", "==", "women"));
    const productSnapshot = await getDocs(q);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList;
};

export const getKidsProducts = async () => {
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("category", "==", "kids"));
    const productSnapshot = await getDocs(q);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList;
};

export const getSpecificProduct = async (id: string) => {
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("id", "==", id));
    const productSnapshot = await getDocs(q);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList;
};

export const deleteCart = async (id: string) => {
    const cartCollectionRef = collection(db, "cart");
    const q = query(cartCollectionRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;
        await deleteDoc(docRef);
        console.log(`Document with field id ${id} deleted successfully.`);
    } else {
        console.log(`No document found with field id ${id}.`);
    }
};

export const addToCart = async (product: Cart) => {
    const cartCollection = collection(db, "cart");
    await addDoc(cartCollection, product);
    console.log("Product added to cart successfully.");
};