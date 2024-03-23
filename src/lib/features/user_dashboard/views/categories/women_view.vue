<template>

  <Header header="WOMEN CLOTHING COLLECTION"
    description="Explore our Women's Clothing Collection, a curated selection of contemporary fashion and timeless elegance. Experience the luxury of high-quality fabrics,"
    description2="exceptional design, and exquisite craftsmanship in each piece. Elevate your wardrobe with our latest collection." />

  <item_render
    :Items="womenItems"
  />
</template>

<script setup lang="ts">
import { womenItems } from '../../models/item';
import Header from '@/components/common/header.vue';
import item_render from '@/components/common/item_render.vue';

</script>