<template>

  <Header header="MEN CLOTHING COLLECTION"
    description="Dive into our Men's Clothing Collection, a perfect blend of timeless classics and modern trends. Experience the finest quality materials, impeccable design,"
    description2="and superior craftsmanship in every piece. Elevate your style with our latest collection." />

  <item_render
    :Items="menItems"
  />
</template>

<script setup lang="ts">
import { menItems } from '../../models/item';
import Header from '@/components/common/header.vue';
import item_render from '@/components/common/item_render.vue';


</script>