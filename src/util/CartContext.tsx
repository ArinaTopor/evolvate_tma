import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from './Product';

interface CartContextType {
    addedItems: Product[];
    onAdd: (product: Product) => void;
    removeItem: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [addedItems, setAddedItems] = useState<Product[]>([]);

    const onAdd = (product: Product) => {
        const alreadyAdded = addedItems.find((item) => item.id === product.id);
        let newItems: Product[] = [];
        if (alreadyAdded) {
            newItems = addedItems.filter((item) => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }
        setAddedItems(newItems);
    };
    const removeItem = (id: number) => {
        let newItems: Product[] = [];
        newItems = addedItems.filter((item) => item.id !== id);
        setAddedItems(newItems);
    };

    return (
        <CartContext.Provider value={{ addedItems, onAdd, removeItem }}>
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
