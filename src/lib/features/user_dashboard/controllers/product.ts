import { getAllProducts } from "@/lib/data/repository/firebase";
import { Image, ProductDetails, Size } from "../models/product";
import { ref } from "vue";

export const images: Image[] = [];
export let selectedImage = ref<Image>({ url: '' });
export const productDetails = ref<ProductDetails[]>([]);
export const sizes = ref<Size[]>([]); // Fixed declaration
export let selectedSize = ref<Size>(); // Use .value to access the array

export const populateProductDetails = async (id: string) => {
    const products = await getAllProducts();
    const product = products.find(product => product.id === id);
    if (product) {
        productDetails.value =  [{
            id: product.id,
            name: product.name,
            price: product.price,
            color: product.color,
            description: product.description
        }];
        const newImages = product.url.map((url: any) => ({ url }));
        images.push(...newImages);
        selectedImage.value = images[0];
    }
};

export const populateSizes = async (id: string) => {
    const products = await getAllProducts();
    const product = products.find(product => product.id === id);
    if (product) {
        sizes.value = product.sizes;
        selectedSize.value = sizes.value[0];
        console.log(sizes.value);
    }
};

export const resetImage = () => {
    images.length = 0;
    selectedImage.value = { url: '' };
};