export interface Cart {
    id: string,
    name: string,
    color: string,
    quantity: number,
    size: string,
}

export interface CartItem{
    id: string,
    name: string,
    img_link: string,
    description: string,
    size: string,
    color: string
    price: number,
    quantity: number
}