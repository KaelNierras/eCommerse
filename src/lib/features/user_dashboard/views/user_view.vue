<template>

  <div class="relative inline-block w-full mb-40">
    <img src="/background.png" alt="background" class="w-full h-full object-cover rounded-xl max-h-cover" />
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-secondary flex flex-col items-start w-full h-full justify-end p-8 :p-10 gap-2 md:gap-8">
      <h1 class=" font-bold text-2xl md:text-5xl">FASHION SUMMER COLLECTION</h1>
      <div class="flex flex-row justify-between w-full">
      <p class=" text-xs   md:text-lg">Find out our best summer collection. Offering our best quality product in a Tolus<br>Spring Collection</p>
      <Button variant="secondary" class="px-10 rounded-full font-bold"> Buy Now</Button>
      </div>
    </div>
  </div>

  <!-- header -->
  <div class="w-full flex flex-col items-center justify-center gap-5">
    <h1 class="text-5xl font-bold">NEW COLLECTION</h1>
    <p class="text-md  text-center opacity-40 font-semibold">Our lastest collection where classic and contemporary styles converge in<br>perfect harmony</p>
  </div>

  
  <div class="w-full h-full flex-col flex items-start justify-start p-16 gap-5">
    <div class="w-full" v-for="(category, index) in categories" :key="index">
      <div class="flex justify-between items-center w-full">
        <span class="text-3xl font-bold mb-10">{{ category.name }}</span>
        <router-link class="text-lg font-normal mb-10 hover:text-blue-600 hover:underline hover:cursor-pointer" :to="category.ref">See more</router-link>
      </div>
      <div class="flex overflow-x-auto whitespace-nowrap w-full">
        <div v-for="item in category.items" :key="item.id" class="border rounded-lg shadow w-64 min-w-64 h-auto m-2">
          <a href="#">
            <img class="rounded-t-lg h-72 w-auto object-cover" :src="item.image" alt="" />
          </a>
          <div class="p-5">
            <div class="flex justify-between font-bold">
              <p class="mb-3 font-bold">{{ item.name }}</p>
              <p class="mb-3 font-bold">{{ item.price }}</p>
            </div>
            <p class="mb-3 font-normal">{{ item.colors }} colors</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ref } from 'vue';

const menItems = ref([
  { id: 1, name: 'Jacket', price: 300, colors: 6, image: '/background.png' },
  // more items...
]);

const womenItems = ref([
  { id: 1, name: 'Jacket', price: 300, colors: 6, image: '/background.png' },
  // more items...
]);

const categories = ref([
  { name: 'Men', items: menItems.value, ref:'/men' },
  { name: 'Women', items: womenItems.value, ref:'/women' },
]);
</script>