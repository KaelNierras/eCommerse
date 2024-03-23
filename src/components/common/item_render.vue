<template>
    <div class="w-full h-full grid sm:grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        <div v-for="(item, index) in Items" :key="index" class="h-auto m-2">
            <router-link :to="`/product/${item.id}`" @click="goToProduct(item.id)">
                <img class="rounded-lg h-80 w-auto object-cover" :src="item.url" alt="" />
            </router-link>
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
import { Items as Item } from '../../lib/features/user_dashboard/models/item';

function goToProduct(id: number) {
  localStorage.setItem('selectedProduct', id.toString());
}

defineProps({
    Items: {
        type: Array as () => Item[],
        required: true
    }
})
</script>