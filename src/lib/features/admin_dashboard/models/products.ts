import { ref } from 'vue'

export interface Product {
    name: string;
    color: string;
    description: string;
    price: string;
}

export const products = ref<Product[]>([
    { name: 'Apple MacBook Pro 17"', color: 'Silver', description: 'Laptop', price: '$2999' },
    { name: 'Microsoft Surface Pro', color: 'White', description: 'Laptop PC', price: '$1999' },
    { name: 'Magic Mouse 2', color: 'Black', description: 'Accessories', price: '$99' },
]);