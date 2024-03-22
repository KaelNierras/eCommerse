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
        <div class="flex flex-col gap-5 mt-10">
            <h1 class="text-5xl md:text-6xl font-bold">{{ productDetails.name }}</h1>
            <div class="flex flex-row  gap-10">
                <div class="flex flex-row">
                    <Star />
                    <span class="font-medium">({{ productStats.rating }})</span>
                </div>
                <span class="font-medium">{{ productStats.reviews }} Reviews</span>
                <span class="font-medium">{{ productStats.sold }} Sold Out</span>
            </div>
            <span class="text-4xl md:text-5xl font-medium">{{ productDetails.currency }} {{ productDetails.price
                }}</span>
            <span class="text-2xl md:text-lg font-medium">Color: <b>{{ productDetails.color }}</b></span>
            <span class="text-2xl md:text-lg font-medium">Size:</span>
            <div class="">
                <Button v-for="(size, index) in sizes" :key="index" variant="outline" class="m-2 w-24 h-14 rounded-3xl"
                    :class="{ 'bg-primary text-primary-foreground': selectedSize.size === size.size }"
                    @click="selectedSize = size">{{ size.size
                    }}</Button>
            </div>
            <Button variant="default" class="w-full h-14 rounded-3xl">Buy Now</Button>
            <Button variant="outline" class="w-full h-14 rounded-3xl">Add to Cart</Button>

            <h2 class="text-2xl font-bold">Product Description</h2>
            <span>{{ productDetails.description }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue';
import { ref } from 'vue';

interface Image {
    url: string;
}

interface ProductStats {
    rating: string;
    reviews: string;
    sold: string;
}

interface ProductDetails {
    name: string;
    price: string;
    color: string;
    currency: string;
    description: string;
}

interface Size {
    size: string;
}

const images: Image[] = [
    { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg' },
    { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' }
]

const productStats: ProductStats = {
    rating: '4.9',
    reviews: '9.2k',
    sold: '10k'
}

const productDetails: ProductDetails = {
    name: 'Bandacore Tshirt',
    price: '₱300',
    color: 'Cream',
    currency: 'PHP',
    description: "This t-shirt is made from 100% organic cotton. It's soft, comfortable, and perfect for everyday wear. The classic cut and neutral color make it a versatile addition to any wardrobe. It features a crew neck, short sleeves, and a relaxed fit that suits all body types. Machine washable for easy care. Available in various sizes."
}

const sizes: Size[] = [
    { size: 'XS' },
    { size: 'S' },
    { size: 'M' },
    { size: 'L' },
    { size: 'XL' }
]

let selectedImage = ref<Image>(images[0])
let selectedSize = ref<Size>(sizes[0])
</script>