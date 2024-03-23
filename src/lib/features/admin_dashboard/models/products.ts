import { Timestamp } from "firebase/firestore";

export interface Product {
    id: string;
    name: string;
    added_date: Timestamp;
    color: string;
    description: string;
    price: string;
    category: string;
    url: string[];
    size: string[];
}

export interface ProductTable {
    color: string;
    name: string;
    description: string;
    price: string;
}