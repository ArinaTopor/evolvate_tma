import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from 'react';
import { Product, ProductCart } from '../util/Product';

interface CartContextType {
    addedItems: ProductCart[];
    setAddedItems: (value: ProductCart[]) => void;
    onAdd: (product: Product, variant_name: string, variant_id: number) => void;
    removeItem: (id: number) => void;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [addedItems, setAddedItems] = useState<ProductCart[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    useEffect(() => {
        const calculateTotalPrice = () => {
            const total = addedItems.reduce((sum, item) => sum + item.price, 0);
            setTotalPrice(total);
        };

        calculateTotalPrice();
    }, [addedItems]);

    const onAdd = (
        product: Product,
        variant_name: string,
        variant_id: number
    ) => {
        const alreadyAdded = addedItems.find((item) => item.id === product.id);
        let newItems: ProductCart[] = [];
        if (alreadyAdded) {
            newItems = addedItems.filter((item) => item.id !== product.id);
        } else {
            newItems = [
                ...addedItems,
                {
                    ...product,
                    variant_id: variant_id,
                    variant_title: variant_name,
                },
            ];
        }
        setAddedItems(newItems);
    };
    const removeItem = (id: number) => {
        let newItems: ProductCart[] = [];
        newItems = addedItems.filter((item) => item.id !== id);
        setAddedItems(newItems);
    };

    return (
        <CartContext.Provider
            value={{ addedItems, setAddedItems, onAdd, removeItem, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
