import { getAllProducts } from "@/lib/data/repository/firebase";
import { Product } from "../models/products";
import { ref } from "vue";

export const products = ref<Product[]>([]);

export const populateAllProducts = async () => {
    const allProducts = await getAllProducts();
    products.value = allProducts
        .map(product => ({
            name: product.name,
            color: product.color,
            description: product.description,
            price: product.price,
        }));
};