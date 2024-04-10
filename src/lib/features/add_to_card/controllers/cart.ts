import { CartItem } from "../models/cart"
import { deleteCart, getAllCart, getSpecificProduct } from "@/lib/data/repository/firebase";
import { ref } from "vue";

export const cartItem = ref<CartItem[]>([]);

export const textFull = ref(false);

export const totalValue = ref(0);

export const totalDiscount = ref(35);

export const totalAmount = ref(0);

export const populateAllCart = async () => {
    const allCart = await getAllCart();
    console.log("allCart:", allCart); // Log allCart to inspect its structure

    const cartLength = allCart.length;

    for (var i = 0; i < cartLength; i++) {
        const currentCart = allCart[i];
        const product = await getSpecificProduct(currentCart.id);
        console.log("product:", product); // Log product to see its structure

        if (product.length > 0 ) {
            console.log(currentCart); // Log the current item in allCart
            if (!cartItem.value.some(item => item.id === currentCart.id)) {
                cartItem.value.push({
                    id: currentCart.id,
                    name: currentCart.name,
                    img_link: product[0].url[0],
                    description: product[0].description,
                    price: product[0].price,
                    color: currentCart.color,
                    quantity: currentCart.quantity,
                    size: currentCart.size,
                });
                getTotalValue();
                getTotalAmount();
                console.log("cartItem.value:", cartItem.value); // Log cartItem.value to see its content
            }
        }
    }

    return true;
};

export const deleteCartItem = async (id: string) => {
    await deleteCart(id);
    cartItem.value = [];
    await populateAllCart();
    await getTotalValue();
    await getTotalAmount();
    alert("Item deleted successfully");
    return true;
}

export const getTotalValue = () => {
    let total = 0;
    for (const item of cartItem.value) {
        total += item.price * item.quantity;
    }
    totalValue.value = total;
};

export const getTotalAmount = () => {
    let total = ref(0);
    total.value = totalValue.value - totalDiscount.value;
    if(total.value < 0){
        total.value = 0;
    }
    totalAmount.value = total.value;
};