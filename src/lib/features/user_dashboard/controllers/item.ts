import { getMenProducts, getWomenProducts, getKidsProducts, getAllNewProducts } from "@/lib/data/repository/firebase";
import { Items } from "../models/item";
import { ref } from "vue";

export const menItems = ref<Items[]>([]);
export const womenItems = ref<Items[]>([]);
export const kidsItems = ref<Items[]>([]);
export const newCollection = ref<Items[]>([]);
  

export const populateMenItems = async () => {
    const products = await getMenProducts();
    menItems.value = products
        .map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            url: product.url[0]
        }));
};

export const populateWomenItems = async () => {
    const products = await getWomenProducts();
    womenItems.value = products
        .map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            url: product.url[0]
        }));
};

export const populateKidsItems = async () => {
    const products = await getKidsProducts();
    kidsItems.value = products
        .map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            url: product.url[0]
        }));
};

export const populateNewCollection = async () => {
    const products = await getAllNewProducts();
    newCollection.value = products
        .map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            url: product.url[0]
        }));
};


