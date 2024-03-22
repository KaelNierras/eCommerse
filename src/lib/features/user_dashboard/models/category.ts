 import { ref } from 'vue';

interface CategoryItem {
    id: number;
    name: string;
    image: string;
    ref: string;
  }
  

export const category = ref<CategoryItem[]>([
    { id: 1, name: 'MEN', image: '/men-category.png', ref: '/men' },
    { id: 2, name: 'WOMEN', image: '/women-category.png', ref: '/women' },
    { id: 3, name: 'KIDS', image: '/kids-category.png', ref: '/kids' },
  ]);
  