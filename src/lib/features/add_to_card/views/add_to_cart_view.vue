<template>
    <Header header="Cart" description="Manage your added Products here." description2="" />

    <!-- Main -->
    <div class="flex flex-col gap-64 md:flex-row">
        <div class="flex flex-1 flex-col w-100 p-3">
            <div class="flex-col p-10 w-100 gap-5 h-auto" v-for="(cart, index) in cartItem" :key="index">
                <div class="flex flex-row gap-5">
                    <!-- Image -->
                    <div>
                        <img :src=cart.img_link class="h-32 w-100 md:pt-0" alt="cartItemImage">
                    </div>

                    <!-- Product Description -->
                    <div class=" w-52 md:w-96">
                        <h3 class="mb-3 font-bold text-3xl">{{ cart.name }}</h3>
                        <span v-if="!textFull" class="text-lg">{{ cart.description.substring(0, 100) }}</span>
                        <span v-if="!textFull" class="text-lg text-blue-600" @click="textFull = true"><br>Show
                            more</span>
                        <span v-if="textFull" class="text-lg">{{ cart.description }}</span>
                        <span v-if="textFull" class="text-lg text-blue-600" @click="textFull = false"><br>Show
                            less</span>

                        <!-- Size and Color -->
                        <div class="text-lg mb-5">
                            <span>Size </span>
                            <span class="font-bold"> {{ cart.size }}</span>
                            <span> / </span>
                            <span>Color </span>
                            <span class="font-bold"> {{ cart.color }}</span>
                        </div>

                        <!-- Price -->
                        <span class="text-xl font-bold ">Php {{ cart.price }}</span>

                    </div>
                </div>

                <hr class="my-5">

                <div class="flex justify-between">

                    <div class="flex items-center">
                        <Button variant="outline" @click="cart.quantity--, getTotalValue(), getTotalAmount();">
                            <Minus />
                        </Button>
                        <span class="px-6"> {{ cart.quantity }}</span>
                        <Button variant="outline" @click="cart.quantity++, getTotalValue(), getTotalAmount();">
                            <Plus />
                        </Button>
                    </div>

                    <Button variant="destructive" @click="deleteCartItem(cart.id)">
                        <Trash2 />
                    </Button>

                </div>

            </div>
        </div>

        <div>

            <!-- Order Summary -->

            <div
                class="card bg-transparent p-10 rounded-lg gap-4 flex flex-col md:w-96 text-lg border-2 border-gray-500">
                <h3 class="mb-3 font-bold text-2xl"> Order Summary</h3>


                <!-- Subtotal -->
                <div class="flex justify-between">
                    <Span>Subtotal</Span>
                    <span class="font-bold"> {{ totalValue }} </span>
                </div>

                <!-- Discount -->
                <div class="flex justify-between">
                    <Span>Discount</Span>
                    <span class="font-bold">Php {{ totalDiscount }}</span>
                </div>

                <!-- Tax -->
                <div class="flex justify-between">
                    <Span>Tax</Span>
                    <span class="font-bold">Php 0</span>
                </div>


                <!-- Shipping -->
                <div class="flex justify-between">
                    <Span>Shipping</Span>
                    <span class="font-bold">Free</span>
                </div>

                <!-- Total -->
                <div class="flex justify-between">
                    <Span>Total</Span>
                    <span class="font-bold">Php {{ totalAmount }}</span>
                </div>

                <Button class="w-full rounded-full text-1xl h-12 font-normal"> Proceed to Checkout</Button>

                <hr>

                <div class="flex gap-2">
                    <span>Estimated Delivery by</span>
                    <span class="font-bold">25 April, 2024</span>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import Header from '@/components/common/header.vue';
import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash2 } from 'lucide-vue-next';
import { populateAllCart, cartItem, deleteCartItem, textFull, totalValue, getTotalValue, totalDiscount, getTotalAmount, totalAmount } from '../controllers/cart';
import { onMounted } from 'vue';

onMounted(() => {
    populateAllCart();
});



// const cartItem = [
//     {
//         name: 'Slim Fit Casual Shirt',
//         img_link: '/men-category.png',
//         description: 'Button-Down Collar & Placket..',
//         size: 'XL',
//         color: 'Marron',
//         price: '300',
//         quantity: '3'
//     },
//     {
//         name: 'Slim Fit Casual Shirt',
//         img_link: '/men-category.png',
//         description: 'Button-Down Collar & Placket..',
//         size: 'XL',
//         color: 'Marron',
//         price: '300',
//         quantity: '3'
//     },
//     {
//         name: 'Slim Fit Casual Shirt',
//         img_link: '/men-category.png',
//         description: 'Button-Down Collar & Placket..',
//         size: 'XL',
//         color: 'Marron',
//         price: '300',
//         quantity: '3'
//     }
// ]




</script>
