<template>
      <!-- header -->
  <div class="w-full flex flex-col items-center justify-center gap-5 mt-20 mb-20">
    <h1 class="text-5xl font-bold">MEN CLOTHING COLLECTION</h1>
    <p class="text-md text-center opacity-40 font-semibold">
        Dive into our Men's Clothing Collection, a perfect blend of timeless classics and modern trends. 
        Experience the finest quality materials, impeccable design,<br>and superior craftsmanship in every piece. 
        Elevate your style with our latest collection.
    </p>
  </div>

  <div class="w-full h-full grid sm:grid-cols-1 md:grid-cols-3 gap-5 mt-5">
    <div v-for="(item, index) in menItems" :key="index" class="h-auto m-2">
      <a href="#">
        <img class="rounded-lg h-80 w-auto object-cover" :src="item.image" alt="" />
      </a>
      <div class="p-3">
        <div class="flex flex-col justify-between font-bold gap-1">
          <p class="font-bold text-2xl">{{ item.name }}</p>
          <p class="font-normal text-foreground/70">{{ item.description }}</p>
          <p class="font-bold text-2xl"> ₱{{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Items } from '../../models/item';

const menItems = ref<Items[]>([
  { id: 1, name: 'Jacket', price: 300, description: 'A stylish and warm jacket for winter', image: '/background.png' },
  { id: 2, name: 'Pants', price: 300, description: 'Comfortable and durable pants for everyday wear', image: '/background.png' },
  { id: 3, name: 'T-shirt', price: 300, description: 'A soft and comfortable t-shirt for casual wear', image: '/background.png' },
  { id: 4, name: 'Sweater', price: 400, description: 'A warm and cozy sweater for cold weather', image: '/background.png' },
  { id: 5, name: 'Jeans', price: 500, description: 'Stylish and durable jeans for any occasion', image: '/background.png' },
  { id: 6, name: 'Shirt', price: 200, description: 'A classic shirt for formal or casual wear', image: '/background.png' },

]);


</script>