import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore"; 

export const getAllProducts = async () => {
    const productsCollection = collection(db, "products");
    const productSnapshot = await getDocs(productsCollection);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList;
  };