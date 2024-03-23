<template>
    <Header
        title="Product Management"
        description="Manage your products here. You can add, edit, and delete products." 
        description2="" 

    />

    <product_table />

</template>

<script setup lang="ts">
import Header from '@/components/common/header.vue';
import product_table from '../components/product_table.vue';
</script>