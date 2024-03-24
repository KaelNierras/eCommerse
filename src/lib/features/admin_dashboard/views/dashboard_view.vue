<template>

    <div v-if="loading_screen" class="loading-screen">
        <div class="loading-spinner"></div>
    </div>

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
import { ref, onMounted } from 'vue';

var loading_screen = ref(localStorage.getItem('loading_screen') === 'true' ? true : false);

onMounted(async () => {
    localStorage.setItem('loading_screen', 'true');
    loading_screen.value = true;
    var done = await populateAllProducts();
    if (done) {
        localStorage.setItem('loading_screen', 'false');
        loading_screen.value = false;
    }
});

</script>

<style scoped>
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Add this line */
}

.loading-spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>