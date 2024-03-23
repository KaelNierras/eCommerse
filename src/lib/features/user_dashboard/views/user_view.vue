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

  <Header 
    header="NEW COLLECTION" 
    description="Find out our best summer collection. Offering our best quality product in a Tolus" 
    description2="Spring Collection" 
  />

  <div class="w-full h-full grid sm:grid-cols-1 md:grid-cols-3 gap-5 mt-5">
    <div v-for="(item, index) in newCollection" :key="index" class="h-auto m-2">
      <router-link :to="`/product/${item.id}`">
        <img class="rounded-lg h-80 w-auto object-cover" :src="item.url" alt="" />
      </router-link>
      <div class="p-3">
        <div class="flex flex-col justify-between font-bold gap-1">
          <p class="font-bold text-2xl">{{ item.name }}</p>
          <p class="font-normal text-foreground/70">{{ item.description }} colors</p>
          <p class="font-bold text-2xl"> ₱{{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>

  <Header 
    header="CATEGORIES" 
    description="Explore our diverse categories, a blend of classic and contemporary styles." 
    description2="Discover the perfect harmony of design, style, and quality in our latest collection." 
  />


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
import { newCollection, populateNewCollection } from '../controllers/item';
import { category } from '../models/category';
import Header from "@/components/common/header.vue";
import { onMounted } from "vue";

onMounted(populateNewCollection);

</script>