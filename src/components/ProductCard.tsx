import { MoneyVariants } from '../consts/MoneyVariants';
import { Product } from '../consts/ProductData';
import BadgeMoney from './BadgeMoney';
import mock from '../assets/term.png';
import styles from './ProductCard.module.css';
import { useState } from 'react';
import ModalInfo from './ModalInfo';
const ProductCard = ({ product }: { product: Product }) => {
    const [open, onOpen] = useState(false);
    return (
        <div className={styles.product_container}>
            <div className={styles.product_image__wrapper}>
                <img
                    src={mock}
                    className={styles.product_image}
                    alt={product.name}
                />
            </div>
            <p className={styles.product_balance}>
                Осталось: {product.balance}.
            </p>
            <h2 className={styles.product_name}>{product.name}</h2>
            <div>
                <button
                    className={styles.product_info}
                    onClick={() => onOpen(true)}
                >
                    о товаре
                </button>
                <BadgeMoney
                    text={product.price.toString()}
                    variant={MoneyVariants.yellow}
                />
            </div>
        </div>
    );
};
export default ProductCard;
