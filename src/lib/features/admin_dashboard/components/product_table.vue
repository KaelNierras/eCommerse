<template>
    <!-- Product Management -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="w-full flex flex-col items-end justify-end">
            <Dialog>
                <DialogTrigger as-child>
                    <Button variant="default">
                        Add Product
                    </Button>
                </DialogTrigger>
                <DialogContent class="sm:max-w-[525px] max-w-[335px]">
                    <DialogHeader>
                        <DialogTitle>Add Product</DialogTitle>
                        <DialogDescription>
                            Add a new product to your catalog here. Click add when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div class="grid gap-4 py-4 row ">
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="name" class="text-right">
                                Name
                            </Label>
                            <Input v-model="name" class="col-span-3" />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label class="text-right">
                                Category
                            </Label>
                            <Select v-model="category">
                                <SelectTrigger class="col-span-3">
                                    <SelectValue placeholder="" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel></SelectLabel>
                                        <SelectItem value="men">
                                            Men
                                        </SelectItem>
                                        <SelectItem value="women">
                                            Women
                                        </SelectItem>
                                        <SelectItem value="kids">
                                            Kids
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="price" class="text-right">
                                Price
                            </Label>
                            <Input id="price" v-model="price" class="col-span-3" />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="color" class="text-right">
                                Color
                            </Label>
                            <Input id="color" v-model="color" class="col-span-3" />
                        </div>
                        <div class="grid grid-cols-4 items-start gap-4">
                            <Label for="username" class="text-right">
                                Description
                            </Label>
                            <Textarea placeholder="Type your message here." v-model="description" class="col-span-3" />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="username" class="text-right">
                                Sizes
                            </Label>
                            <div class="col-span-1">
                                <Checkbox id="XS" @click="updateSizes('XS')" />
                                <label for="XS"
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    XS
                                </label>
                            </div>
                            <div class="col-span-1">
                                <Checkbox id="S" @click="updateSizes('S')" />
                                <label for="S"
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    S
                                </label>
                            </div>
                            <div class="col-span-1">
                                <Checkbox id="M" @click="updateSizes('M')" />
                                <label for="M"
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    M
                                </label>
                            </div>
                            <div class="col-span-1"></div>
                            <div class="col-span-1">
                                <Checkbox id="L" @click="updateSizes('L')" />
                                <label for="L"
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    L
                                </label>
                            </div>
                            <div class="col-span-1">
                                <Checkbox id="XL" @click="updateSizes('XL')" />
                                <label for="XL"
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    XL
                                </label>
                            </div>
                        </div>
                        <Separator class="my-3" />
                        <DialogDescription>
                            Select up to five images for your product.
                        </DialogDescription>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="username" class="text-right">
                                Image 1
                            </Label>
                            <input type="file" @change="onFileChange1"
                                class="rounded col-span-3 h-full p-0 text-sm  file:text-sm " />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="username" class="text-right">
                                Image 2
                            </Label>
                            <input type="file" @change="onFileChange2"
                                class="rounded col-span-3 h-full p-0 text-sm  file:text-sm " />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="username" class="text-right">
                                Image 3
                            </Label>
                            <input type="file" @change="onFileChange3"
                                class="rounded col-span-3 h-full p-0 text-sm  file:text-sm " />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="username" class="text-right">
                                Image 4
                            </Label>
                            <input type="file" @change="onFileChange4"
                                class="rounded col-span-3 h-full p-0 text-sm  file:text-sm " />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="username" class="text-right">
                                Image 5
                            </Label>
                            <input type="file" @change="onFileChange5"
                                class="rounded col-span-3 h-full p-0 text-sm  file:text-sm " />
                        </div>

                    </div>
                    <DialogFooter>
                        <Button type="submit" @click=addProduct>
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
                        <Dialog>
                            <DialogTrigger as-child>
                                <Button variant="default" @click="updateField(product.id)">
                                    Edit
                                </Button>
                            </DialogTrigger>
                            <DialogContent class="sm:max-w-[525px] max-w-[335px]">
                                <DialogHeader>
                                    <DialogTitle>Edit Product</DialogTitle>
                                    <DialogDescription>
                                        Add a edit product to your catalog here. Click add when you're done.
                                    </DialogDescription>
                                </DialogHeader>
                                <div class="grid gap-4 py-4 row ">
                                    <div class="grid grid-cols-4 items-center gap-4">
                                        <Label for="name" class="text-right">
                                            Name
                                        </Label>
                                        <Input v-model="name" class="col-span-3" />
                                    </div>
                                    <div class="grid grid-cols-4 items-center gap-4">
                                        <Label class="text-right">
                                            Category
                                        </Label>
                                        <Select v-model="category">
                                            <SelectTrigger class="col-span-3">
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel></SelectLabel>
                                                    <SelectItem value="men">
                                                        Men
                                                    </SelectItem>
                                                    <SelectItem value="women">
                                                        Women
                                                    </SelectItem>
                                                    <SelectItem value="kids">
                                                        Kids
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div class="grid grid-cols-4 items-center gap-4">
                                        <Label for="price" class="text-right">
                                            Price
                                        </Label>
                                        <Input id="price" v-model="price" class="col-span-3" />
                                    </div>
                                    <div class="grid grid-cols-4 items-center gap-4">
                                        <Label for="color" class="text-right">
                                            Color
                                        </Label>
                                        <Input id="color" v-model="color" class="col-span-3" />
                                    </div>
                                    <div class="grid grid-cols-4 items-start gap-4">
                                        <Label for="username" class="text-right">
                                            Description
                                        </Label>
                                        <Textarea placeholder="Type your message here." v-model="description"
                                            class="col-span-3" />
                                    </div>
                                    <div class="grid grid-cols-4 items-center gap-4">
                                        <Label for="username" class="text-right">
                                            Sizes
                                        </Label>
                                        <div class="col-span-1">
                                            <Checkbox id="XS" @click="updateSizes('XS')" />
                                            <label for="XS"
                                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                XS
                                            </label>
                                        </div>
                                        <div class="col-span-1">
                                            <Checkbox id="S" @click="updateSizes('S')" />
                                            <label for="S"
                                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                S
                                            </label>
                                        </div>
                                        <div class="col-span-1">
                                            <Checkbox id="M" @click="updateSizes('M')" />
                                            <label for="M"
                                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                M
                                            </label>
                                        </div>
                                        <div class="col-span-1"></div>
                                        <div class="col-span-1">
                                            <Checkbox id="L" @click="updateSizes('L')" />
                                            <label for="L"
                                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                L
                                            </label>
                                        </div>
                                        <div class="col-span-1">
                                            <Checkbox id="XL" @click="updateSizes('XL')" />
                                            <label for="XL"
                                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                XL
                                            </label>
                                        </div>
                                    </div>
                                    <Separator class="my-3" />
                                    <DialogDescription>
                                        Select up to five images for your product.
                                    </DialogDescription>
                                    <div class="grid grid-cols-4 items-center gap-4">
                                        <Label for="username" class="text-right">
                                            Image 1
                                        </Label>
                                        <input type="file" @change="onFileChange1"
                                            class="rounded col-span-3 h-full p-0 text-sm  file:text-sm " />
                                    </div>
                                    <div class="grid grid-cols-4 items-center gap-4">
                                        <Label for="username" class="text-right">
                                            Image 2
                                        </Label>
                                        <input type="file" @change="onFileChange2"
                                            class="rounded col-span-3 h-full p-0 text-sm  file:text-sm " />
                                    </div>
                                    <div class="grid grid-cols-4 items-center gap-4">
                                        <Label for="username" class="text-right">
                                            Image 3
                                        </Label>
                                        <input type="file" @change="onFileChange3"
                                            class="rounded col-span-3 h-full p-0 text-sm  file:text-sm " />
                                    </div>
                                    <div class="grid grid-cols-4 items-center gap-4">
                                        <Label for="username" class="text-right">
                                            Image 4
                                        </Label>
                                        <input type="file" @change="onFileChange4"
                                            class="rounded col-span-3 h-full p-0 text-sm  file:text-sm " />
                                    </div>
                                    <div class="grid grid-cols-4 items-center gap-4">
                                        <Label for="username" class="text-right">
                                            Image 5
                                        </Label>
                                        <input type="file" @change="onFileChange5"
                                            class="rounded col-span-3 h-full p-0 text-sm  file:text-sm " />
                                    </div>

                                </div>
                                <DialogFooter>
                                    <Button variant="destructive" type="submit" @click="deleteTrigger(product.id)">
                                        Delete
                                    </Button>
                                    <Button type="submit" @click="updateTrigger(product.id)">
                                        Update
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
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
import { Product, ProductTable } from '../models/products' // assuming you have a class ProductModel
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { db } from '@/lib/data/repository/firebaseConfig'
import { Timestamp, addDoc, collection, deleteDoc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { ref } from 'vue';
import { uploadBytes, getDownloadURL, ref as refStore, deleteObject } from 'firebase/storage';
import { getStorage } from "firebase/storage";
import { getSpecificProduct } from '@/lib/data/repository/firebase'

var category = ref('');
var name = ref('');
var price = ref('');
var color = ref('');
var description = ref('');
var size = ref<string[]>([]);
var currentId = ref('');

function updateField(id: string) {
    const currentId = id;
    populateAllProducts(currentId);
    console.log(currentId);
    clearFields();
}

const populateAllProducts = async (id: string) => {
    const specificProduct: Product[] = await getSpecificProduct(id) as Product[];
    specificProduct
        .map((product: Product) => ({
            name: product.name,
            color: product.color,
            description: product.description,
            price: product.price,
        }));

    name.value = specificProduct[0].name;
    category.value = specificProduct[0].category;
    price.value = specificProduct[0].price;
    color.value = specificProduct[0].color;
    description.value = specificProduct[0].description;
};

function clearFields() {
    category.value = '';
    name.value = '';
    price.value = '';
    color.value = '';
    description.value = '';
    size.value = [];
}

let selectedFiles = ref<(File | null)[]>([null, null, null, null, null]);

const onFileChange = (index: number) => (e: Event) => {
    selectedFiles.value[index] = ((e.target as HTMLInputElement)?.files?.[0] || null);
    console.log(selectedFiles.value[index]?.name);
};

const onFileChange1 = onFileChange(0);
const onFileChange2 = onFileChange(1);
const onFileChange3 = onFileChange(2);
const onFileChange4 = onFileChange(3);
const onFileChange5 = onFileChange(4);


async function uploadImage(selectedFile: File, id: string, name: string): Promise<string> {
    // Create a root reference
    const storage = getStorage();

    // Upload the image to Firebase Storage
    const storageRef = refStore(storage, 'images/' + id + '/' + name);
    if (selectedFile) {
        await uploadBytes(storageRef, selectedFile);
    } else {
        await uploadBytes(storageRef, new Uint8Array());
    }

    // Get the download URL for the uploaded image
    const imageURL = await getDownloadURL(storageRef);
    return imageURL;
}


const updateSizes = (sizeValue: string) => {
    const index = size.value.indexOf(sizeValue);
    if (index !== -1) {
        // sizeValue is already in the array, remove it
        size.value.splice(index, 1);
    } else {
        // sizeValue is not in the array, add it
        size.value.push(sizeValue);
    }

    // Reference array for sorting
    const sizeOrder = ['XS', 'S', 'M', 'L', 'XL'];

    // Sort the size array based on the order in sizeOrder
    size.value.sort((a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b));
};

function generateRandomId(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

const addProduct = async (product: Product) => {
    try {
        const productsRef = collection(db, 'products');
        var URL = ref<string[]>([]);

        const randomId = generateRandomId(20)
        for (let i = 0; i < selectedFiles.value.length; i++) {
            if (!selectedFiles.value[i] || selectedFiles.value[i]?.size === 0) {
                continue;
            }
            var imageLink = await uploadImage(selectedFiles.value[i] || new File([], ''), randomId.toString(), `image${i}.jpg`);
            URL.value.push(imageLink);
        }

        product = {
            id: randomId,
            added_date: Timestamp.now(),
            name: name.value,
            category: category.value,
            price: price.value,
            color: color.value,
            description: description.value,
            size: size.value,
            url: URL.value,
        };
        console.log(product);
        await addDoc(productsRef, {
            id: product.id,
            added_date: product.added_date,
            name: product.name,
            category: product.category,
            price: product.price,
            color: product.color,
            description: product.description,
            sizes: product.size,
            url: product.url
        });

    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

const deleteProduct = async (id: string) => {
    try {
        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where("id", "==", id));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            console.log('No matching documents.');
            return;
        }
        querySnapshot.forEach((doc) => {
            deleteDoc(doc.ref).then(() => {
                console.log('Document deleted successfully');
            }).catch((error) => {
                console.error('Error deleting document: ', error);
            });
        });
    } catch (e) {
        console.error('Error deleting document: ', e);
    }
};


const updateProduct = async (id: string) => {
    try {
        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where("id", "==", id));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            console.log('No matching documents.');
            return;
        }
        var URL = ref<string[]>([]);
        if (selectedFiles.value[0] == null && selectedFiles.value[1] == null && selectedFiles.value[2] == null && selectedFiles.value[3] == null && selectedFiles.value[4] == null) {
            console.log(id);
            const storage = getStorage();
            for (let i = 0; i < 5; i++) {
                // Create a reference to the file to delete
                const currentImage = refStore(storage, `images/${id}/image${i}.jpg`);
                // Delete the file
                deleteObject(currentImage).then(() => {
                    console.log('File deleted successfully');
                }).catch((error) => {
                    console.error('Error removing file: ', error);
                });
            }
            URL.value = [];
        } else {
            const storage = getStorage();
            for (let i = 0; i < 5; i++) {
                // Create a reference to the file to delete
                const currentImage = refStore(storage, `images/${id}/image${i}.jpg`);
                // Delete the file
                deleteObject(currentImage);
            }
            URL.value = [];
            for (let i = 0; i < selectedFiles.value.length; i++) {
                if (!selectedFiles.value[i] || selectedFiles.value[i]?.size === 0) {
                    continue;
                }
                var imageLink = await uploadImage(selectedFiles.value[i] || new File([], ''), currentId.value, `image${i}.jpg`);
                URL.value.push(imageLink);
            }
        }
        const product = {
            id: currentId.value,
            name: name.value,
            category: category.value,
            price: price.value,
            color: color.value,
            description: description.value,
            size: size.value,
            url: URL.value,
        };
        console.log(product);
        querySnapshot.forEach((doc) => {
            updateDoc(doc.ref, {
                name: product.name,
                category: product.category,
                price: product.price,
                color: product.color,
                description: product.description,
                sizes: product.size,
                url: product.url
            });
        });
    } catch (e) {
        console.error('Error updating document: ', e);
    }
};

async function deleteTrigger(id: string) {
    currentId.value = id;
    deleteProduct(currentId.value);
}

async function updateTrigger(id: string) {
    currentId.value = id;
    updateProduct(currentId.value);
}

defineProps({
    products: {
        type: Array as () => ProductTable[],
        required: true
    }
})

</script>