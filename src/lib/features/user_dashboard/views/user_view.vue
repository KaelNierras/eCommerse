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
    <p class="text-md text-center opacity-40 font-semibold">Our lastest collection where classic and contemporary styles converge in<br>perfect harmony</p>
  </div>

  
  <div class="w-full h-full grid grid-cols-3 gap-5 mt-5">
    <div class="col-span-3" v-for="(category, index) in categories" :key="index">
      <div class="grid grid-cols-3 gap-2 w-full">
        <div v-for="item in category.items" :key="item.id" class="col-span-1 h-auto m-2">
          <a href="#">
            <img class="rounded-lg h-72 w-auto object-cover" :src="item.image" alt="" />
          </a>
          <div class="p-3">
            <div class="flex flex-col justify-between font-bold gap-1">
              <p class="font-bold">{{ item.name }}</p>
              <p class="font-normal">{{ item.colors }} colors</p>
              <p class="font-bold"> ₱{{ item.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ref } from 'vue';

const newCollection = ref([
  { id: 1, name: 'Jacket', price: 300, colors: 6, image: '/background.png' },
  { id: 2, name: 'Jacket', price: 300, colors: 6, image: '/background.png' },
  { id: 3, name: 'Jacket', price: 300, colors: 6, image: '/background.png' },
  // more items...
]);


const categories = ref([
  { name: 'Men', items: newCollection.value, ref:'/men' },
]);
</script>