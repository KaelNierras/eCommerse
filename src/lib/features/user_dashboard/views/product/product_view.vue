<template>
    <div class="grid grid-row md:grid-cols-[2fr,1fr] gap-16">
        <div class="grid gap-4">
            <div class="aspect-w-16 aspect-h-9">
                <img class="h-feature min-w-full rounded-lg object-cover" :src="selectedImage.url" alt="">
            </div>
            <div class="grid grid-cols-5 gap-4">
                <div v-for="(image, index) in images" :key="index" class="aspect-w-1 aspect-h-1">
                    <img class="h-full max-w-full rounded-lg object-cover" @click="selectedImage = image"
                        :src="image.url" alt="">
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-5 mt-10" v-for="(product, index) in productDetails" :key="index">
            <h1 class="text-5xl md:text-6xl font-bold">{{ product.name }}</h1>
            <div class="flex flex-row  gap-10">
                <div class="flex flex-row">
                    <Star />
                    <span class="font-medium">({{ productStats.rating }})</span>
                </div>
                <span class="font-medium">{{ productStats.reviews }}k Reviews</span>
                <span class="font-medium">{{ productStats.sold }}k Sold Out</span>
            </div>
            <span class="text-4xl md:text-5xl font-medium">PHP ₱{{ product.price
                }}</span>
            <span class="text-2xl md:text-lg font-medium">Color: <b>{{ product.color }}</b></span>
            <span class="text-2xl md:text-lg font-medium">Size:</span>
            <div class="">
                <Button v-for="(size, index) in sizes" :key="index" variant="outline" class="m-2 w-24 h-14 rounded-3xl"
                    :class="{ 'bg-primary text-primary-foreground': selectedSize === size }"
                    @click="selectedSize = size">{{ size
                }}</Button>
            </div>
            <Button variant="default" class="w-full h-14 rounded-3xl">Buy Now</Button>
            <Button variant="outline" class="w-full h-14 rounded-3xl">Add to Cart</Button>

            <h2 class="text-2xl font-bold">Product Description</h2>
            <span>{{ product.description }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { Star } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue';
import { productStats  } from '../../models/product';
import { images, selectedImage, populateProductDetails, productDetails, resetImage, sizes, selectedSize, populateSizes  } from '../../controllers/product';


onMounted(async () => {
    const selectedProduct = localStorage.getItem('selectedProduct');
    console.log(selectedProduct);
    if (selectedProduct) {
        await populateProductDetails(selectedProduct);
        await populateSizes(selectedProduct);
    }
});

onUnmounted(() => {
    resetImage();
    console.log('unmounted');
});

</script>