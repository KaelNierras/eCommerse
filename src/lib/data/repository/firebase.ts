import { db } from "./firebaseConfig";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore"; 

export const getAllProducts = async () => {
    const productsCollection = collection(db, "products");
    const productSnapshot = await getDocs(productsCollection);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList;
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