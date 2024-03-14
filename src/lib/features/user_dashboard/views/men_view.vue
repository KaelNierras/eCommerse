<template>
    <main class="p-10">
        <span class="text-3xl font-bold">Men Category</span>
        <div class="flex overflow-x-auto whitespace-nowrap w-full mt-5">
            <div class="w-full" v-for="(category, index) in categories" :key="index">
                <div class="flex overflow-x-auto whitespace-nowrap w-full">
                    <div v-for="item in category.items" :key="item.id"
                        class="border rounded-lg shadow w-64 min-w-64 h-auto m-2">
                        <a href="#">
                            <img class="rounded-t-lg h-72 w-auto object-cover" :src="item.image" alt="" />
                        </a>
                        <div class="p-5">
                            <div class="flex justify-between font-bold">
                                <p class="mb-3 font-bold">{{ item.name }}</p>
                                <p class="mb-3 font-bold">{{ item.price }}</p>
                            </div>
                            <p class="mb-3 font-normal">{{ item.colors }} colors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menItems = ref([
  { id: 1, name: 'Jacket', price: 300, colors: 6, image: '/background.png' },
  // more items...
]);

const categories = ref([
    { name: 'Men', items: menItems.value, ref: '/men' },
]);


</script>