import { getAllProducts, getWomenProducts } from "@/lib/data/repository/firebase";
import { Image, ProductDetails } from "../models/product";
import { ref } from "vue";

export const images: Image[] = [];
export let selectedImage = ref<Image>({ url: '' });
export const productDetails = ref<ProductDetails[]>([]);

export const populateProductDetails = async () => {
    const products = await getAllProducts();
    productDetails.value = products.map(product => ({
        name: product.name,
        price: product.price,
        color: product.color,
        description: product.description
    }));
    const newImages = products.flatMap(product => product.url.map((url: any) => ({ url })));
    images.push(...newImages);
    selectedImage.value = images[0];
};
