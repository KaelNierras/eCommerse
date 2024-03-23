import { ref } from 'vue';

export interface Items {
    id: number;
    name: string;
    price: number;
    description: string;
    url: string;
}

export const kidsItems = ref<Items[]>([
    { id: 1, name: 'Jacket', price: 300, description: 'A stylish and warm jacket for winter', url: '/background.png' },
    { id: 2, name: 'Pants', price: 300, description: 'Comfortable and durable pants for everyday wear', url: '/background.png' },
    { id: 3, name: 'T-shirt', price: 300, description: 'A soft and comfortable t-shirt for casual wear', url: '/background.png' },
    { id: 4, name: 'Sweater', price: 400, description: 'A warm and cozy sweater for cold weather', url: '/background.png' },
    { id: 5, name: 'Jeans', price: 500, description: 'Stylish and durable jeans for any occasion', url: '/background.png' },
    { id: 6, name: 'Shirt', price: 200, description: 'A classic shirt for formal or casual wear', url: '/background.png' },
  ]);
  

export const menItems = ref<Items[]>([
    { id: 1, name: 'Jacket', price: 300, description: 'A stylish and warm jacket for winter', url: '/background.png' },
    { id: 2, name: 'Pants', price: 300, description: 'Comfortable and durable pants for everyday wear', url: '/background.png' },
    { id: 3, name: 'T-shirt', price: 300, description: 'A soft and comfortable t-shirt for casual wear', url: '/background.png' },
    { id: 4, name: 'Sweater', price: 400, description: 'A warm and cozy sweater for cold weather', url: '/background.png' },
    { id: 5, name: 'Jeans', price: 500, description: 'Stylish and durable jeans for any occasion', url: '/background.png' },
    { id: 6, name: 'Shirt', price: 200, description: 'A classic shirt for formal or casual wear', url: '/background.png' },
  
  ]);

export const womenItems = ref<Items[]>([
  { id: 1, name: 'Jacket', price: 300, description: 'A stylish and warm jacket for winter', url: '/background.png' },
  { id: 2, name: 'Pants', price: 300, description: 'Comfortable and durable pants for everyday wear', url: '/background.png' },
  { id: 3, name: 'T-shirt', price: 300, description: 'A soft and comfortable t-shirt for casual wear', url: '/background.png' },
  { id: 4, name: 'Sweater', price: 400, description: 'A warm and cozy sweater for cold weather', url: '/background.png' },
  { id: 5, name: 'Jeans', price: 500, description: 'Stylish and durable jeans for any occasion', url: '/background.png' },
  { id: 6, name: 'Shirt', price: 200, description: 'A classic shirt for formal or casual wear', url: '/background.png' },

]);


export const newCollection = ref<Items[]>([
  { id: 1, name: 'Jacket', price: 300, description: 'A stylish and warm jacket for winter', url: '/background.png' },
  { id: 2, name: 'Pants', price: 300, description: 'Comfortable and durable pants for everyday wear', url: '/background.png' },
  { id: 3, name: 'T-shirt', price: 300, description: 'A soft and comfortable t-shirt for casual wear', url: '/background.png' },
  { id: 4, name: 'Sweater', price: 400, description: 'A warm and cozy sweater for cold weather', url: '/background.png' },
  { id: 5, name: 'Jeans', price: 500, description: 'Stylish and durable jeans for any occasion', url: '/background.png' },
  { id: 6, name: 'Shirt', price: 200, description: 'A classic shirt for formal or casual wear', url: '/background.png' },
]);

  