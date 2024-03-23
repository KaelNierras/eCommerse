<template>
    <Header
        header="Product Management"
        description="Manage your products here. You can add, edit, and delete products." 
        description2="" 

    />

    <product_table
        :products="products" />

</template>

<script setup lang="ts">
import Header from '@/components/common/header.vue';
import product_table from '../components/product_table.vue';
import { products, populateAllProducts } from '../controllers/products'
import { onMounted } from 'vue';

onMounted(populateAllProducts);

</script>