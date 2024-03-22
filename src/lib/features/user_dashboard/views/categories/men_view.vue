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
import { menItems } from '../../models/item';



</script>