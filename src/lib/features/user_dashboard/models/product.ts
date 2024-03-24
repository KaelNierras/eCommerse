
export interface Image {
    url: string;
}

export interface ProductStats {
    rating: string;
    reviews: string;
    sold: string;
}

export interface ProductDetails {
    name: string;
    price: string;
    color: string;
    description: string;
}

export interface Size {
    size: string;
}

export const productStats: ProductStats = {
    rating: '4.9',
    reviews: '9.2',
    sold: '10'
}


