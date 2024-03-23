<template>
    <!-- Product Management -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="w-full flex items-center justify-end">
            <Dialog>
                <DialogTrigger as-child>
                    <Button variant="default">
                        Add Product
                    </Button>
                </DialogTrigger>
                <DialogContent class="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Product</DialogTitle>
                        <DialogDescription>
                            Add a new product to your catalog here. Click add when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div class="grid gap-4 py-4">
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="name" class="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" class="col-span-3" />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="price" class="text-right">
                                Price
                            </Label>
                            <Input id="price" value="" class="col-span-3" />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="color" class="text-right">
                                Color
                            </Label>
                            <Input id="color" value="" class="col-span-3" />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="username" class="text-right">
                                Description
                            </Label>
                            <Input id="username" value="@peduarte" class="col-span-3" />
                        </div>
                        <Separator class="my-5" />
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="username" class="text-right">
                                Image 1
                            </Label>
                            <Input id="picture" type="file" class="col-span-3 h-full p-0" />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="username" class="text-right">
                                Image 2
                            </Label>
                            <Input id="picture" type="file" class="col-span-3 h-full p-0" />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="username" class="text-right">
                                Image 3
                            </Label>
                            <Input id="picture" type="file" class="col-span-3 h-full p-0" />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="username" class="text-right">
                                Image 4
                            </Label>
                            <Input id="picture" type="file" class="col-span-3 h-full p-0" />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="username" class="text-right">
                                Image 5
                            </Label>
                            <Input id="picture" type="file" class="col-span-3 h-full p-0" />
                        </div>

                    </div>
                    <DialogFooter>
                        <Button type="submit">
                            Add
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>

        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption
                class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Product Management
                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Manage your products here. You
                    can add new products, update existing products, and remove products as needed.</p>
            </caption>



            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="index"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ product.name }}
                    </th>
                    <td class="px-6 py-4">
                        {{ product.price }}
                    </td>
                    <td class="px-6 py-4">
                        {{ product.color }}
                    </td>
                    <td class="px-6 py-4">
                        {{ product.description }}
                    </td>
                    <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">    
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from "@/components/ui/separator"
import { products } from '../models/products'



</script>