export type ProductImg = {
    id: number;
    image: string;
};
export type Variant = {
    id: number;
    value: string;
};
export interface Product {
    id: number;
    name: string;
    description: string;
    balance: number;
    price: number;
    variant_name: string;
    image: ProductImg[];
    variant: Variant[];
}

export type CartType = {
    user_id: number;
    product_id: number;
    variant_id: number;
};
export interface ProductCart {
    id: number;
    name: string;
    description: string;
    balance: number;
    price: number;
    variant_name: string;
    image: ProductImg[];
    variant: Variant[];
    variant_id: number;
    variant_title: string;
}
