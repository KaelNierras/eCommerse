<template>
      <!-- header -->
  <div class="w-full flex flex-col items-center justify-center gap-5 mt-20 mb-20">
    <h1 class="text-5xl font-bold">KIDS CLOTHING COLLECTION</h1>
    <p class="text-md text-center opacity-40 font-semibold">
      Discover our Kids' Clothing Collection, a delightful mix of comfort, style, and durability. 
      Experience the softness of high-quality fabrics,<br>playful designs, and meticulous craftsmanship in each piece. 
      Add a touch of fun to their wardrobe with our latest collection.
    </p>
  </div>

  <div class="w-full h-full grid sm:grid-cols-1 md:grid-cols-3 gap-5 mt-5">
    <div v-for="(item, index) in kidsItems" :key="index" class="h-auto m-2">
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
import { kidsItems } from '../../models/item';


</script>