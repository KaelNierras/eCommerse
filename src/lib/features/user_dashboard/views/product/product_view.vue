<template>
    <div class="grid grid-row md:grid-cols-[2fr,1fr] gap-16">
        <div class="grid gap-4">
            <div class="aspect-w-16 aspect-h-9">
                <img class="h-feature min-w-full rounded-lg object-cover" :src="selectedImage" alt="">
            </div>
            <div class="grid grid-cols-5 gap-4">
                <div v-for="(image, index) in images" :key="index" class="aspect-w-1 aspect-h-1">
                    <img class="h-full max-w-full rounded-lg object-cover" @click="selectedImage = image" :src="image"
                        alt="">
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-5">
            <h1 class="text-5xl md:text-6xl font-semibold">Bandacore Tshirt</h1>
            <div class="flex flex-row  gap-10">
                <div class="flex flex-row">
                    <Sparkles />
                    <span class="font-medium">(4.9)</span>
                </div>
                <span class="font-medium">9.2k Reviews</span>
                <span class="font-medium">10k Reviews</span>
            </div>
            <span class="text-4xl md:text-6xl font-medium">PHP ₱300</span>
            <span class="text-2xl md:text-2xl font-medium">Color: <b>Cream</b></span>
            <span class="text-2xl md:text-2xl font-medium">Size:</span>
            <div class="">
                <Button v-for="(size, index) in sizes" :key="index" variant="outline" class="m-2 w-24 h-14 rounded-3xl"
                    :class="{ 'bg-primary text-primary-foreground': selectedSize === size }" @click="selectedSize = size">{{ size
                    }}</Button>
            </div>
            <Button variant="default" class="w-full h-14 rounded-3xl">Buy Now</Button>
            <Button variant="outline" class="w-full h-14 rounded-3xl">Add to Cart</Button>
            
            <h2 class="text-2xl font-bold">Product Description</h2>
            <span>This t-shirt is made from 100% organic cotton. It's soft, comfortable, and perfect for everyday wear. The classic cut and neutral color make it a versatile addition to any wardrobe. It features a crew neck, short sleeves, and a relaxed fit that suits all body types. Machine washable for easy care. Available in various sizes.</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue';

const images = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'
]

const sizes = ['XS', 'S', 'M', 'L', 'XL']
let selectedImage = ref<string>(images[0])
let selectedSize = ref<string>(sizes[0])
</script>