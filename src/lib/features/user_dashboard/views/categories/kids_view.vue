<template>
  <Header header="KIDS COLLECTION"
    description="Discover our Kids' Clothing Collection, a delightful mix of comfort, style, and durability."
    description2="Experience the softness of high-quality fabrics, playful designs, and meticulous craftsmanship in each piece." />

  <item_render
    :Items="kidsItems"
  />
  
</template>

<script setup lang="ts">
import { kidsItems } from '../../models/item';
import Header from '@/components/common/header.vue';
import item_render from '@/components/common/item_render.vue';

</script>