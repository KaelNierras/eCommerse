<template>


  <div class="relative inline-block w-full">
    <img src="/background.png" alt="background" class="w-full h-full object-cover rounded-xl max-h-cover" />
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-secondary flex flex-col items-start w-full h-full justify-end p-8 :p-10 gap-2 md:gap-8">
      <h1 class=" font-bold text-2xl md:text-5xl">MEN SUMMER COLLECTION</h1>
      <div class="flex flex-row justify-between w-full">
        <p class=" text-xs   md:text-lg">Find out our best summer collection. Offering our best quality product in a
          Tolus<br>Spring Collection</p>
        <router-link to="/men">
          <Button variant="secondary" class="px-8 rounded-full font-bold"> Buy Now</Button>
        </router-link>
      </div>
    </div>
  </div>

  <!-- header -->
  <div class="w-full flex flex-col items-center justify-center gap-5 mt-40 mb-20">
    <h1 class="text-5xl font-bold">NEW COLLECTION</h1>
    <p class="text-md text-center opacity-40 font-semibold">Our lastest collection where classic and contemporary styles
      converge in<br>perfect harmony</p>
  </div>


  <div class="w-full h-full grid sm:grid-cols-1 md:grid-cols-3 gap-5 mt-5">
    <div v-for="(item, index) in newCollection" :key="index" class="h-auto m-2">
      <a href="#">
        <img class="rounded-lg h-80 w-auto object-cover" :src="item.image" alt="" />
      </a>
      <div class="p-3">
        <div class="flex flex-col justify-between font-bold gap-1">
          <p class="font-bold text-2xl">{{ item.name }}</p>
          <p class="font-normal text-foreground/70">{{ item.description }} colors</p>
          <p class="font-bold text-2xl"> ₱{{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>


  <!-- header -->
  <div class="w-full flex flex-col items-center justify-center gap-5 mt-40 mb-20">
    <h1 class="text-5xl font-bold">CATEGORIES</h1>
    <p class="text-md text-center opacity-40 font-semibold">Explore our diverse categories, a blend of classic and
      contemporary styles.<br>Discover the perfect harmony of design, style, and quality in our latest collection.</p>
  </div>

  <div class="w-full h-full flex flex-wrap sm:flex-nowrap justify-center">
    <div v-for="(item, index) in category" :key="index" class="h-auto m-2 relative">
      <a href="#">
        <img class="rounded-lg h-96 w-auto object-cover" :src="item.image" alt="" />
        <div class="absolute bottom-0 left-0 p-5 md:p-10 w-full bg-opacity-50 text-white">
          <p class="font-bold text-4xl mb-5">{{ item.name }}</p>
          <router-link :to="item.ref">
            <Button variant="secondary" class="px-8 rounded-full font-bold">See Details</Button>
          </router-link>
        </div>
      </a>
    </div>
  </div>



</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ref } from 'vue';

const newCollection = ref([
  { id: 1, name: 'Jacket', price: 300, description: 'A stylish and warm jacket for winter', image: '/background.png' },
  { id: 2, name: 'Pants', price: 300, description: 'Comfortable and durable pants for everyday wear', image: '/background.png' },
  { id: 3, name: 'T-shirt', price: 300, description: 'A soft and comfortable t-shirt for casual wear', image: '/background.png' },
  { id: 4, name: 'Sweater', price: 400, description: 'A warm and cozy sweater for cold weather', image: '/background.png' },
  { id: 5, name: 'Jeans', price: 500, description: 'Stylish and durable jeans for any occasion', image: '/background.png' },
  { id: 6, name: 'Shirt', price: 200, description: 'A classic shirt for formal or casual wear', image: '/background.png' },

]);


const category = ref([
  { id: 1, name: 'MEN', image: '/men-category.png', ref: '/men' },
  { id: 2, name: 'WOMEN', image: '/women-category.png', ref: '/women' },
  { id: 2, name: 'KIDS', image: '/kids-category.png', ref: '/kids' },
]);

</script>