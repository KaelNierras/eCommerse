import { ref } from 'vue'

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

export const images: Image[] = [
    { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg' },
    { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' }
]

export const productStats: ProductStats = {
    rating: '4.9',
    reviews: '9.2k',
    sold: '10k'
}

export const productDetails: ProductDetails = {
    name: 'Bandacore Tshirt',
    price: '₱300',
    color: 'Cream',
    currency: 'PHP',
    description: "This t-shirt is made from 100% organic cotton. It's soft, comfortable, and perfect for everyday wear. The classic cut and neutral color make it a versatile addition to any wardrobe. It features a crew neck, short sleeves, and a relaxed fit that suits all body types. Machine washable for easy care. Available in various sizes."
}

export const sizes: Size[] = [
    { size: 'XS' },
    { size: 'S' },
    { size: 'M' },
    { size: 'L' },
    { size: 'XL' }
]

export let selectedImage = ref<Image>(images[0])
export let selectedSize = ref<Size>(sizes[0])