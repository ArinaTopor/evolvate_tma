import { MoneyVariants } from '../../consts/MoneyVariants';
import BadgeMoney from '../BadgeMoney/BadgeMoney';
import styles from './ProductCard.module.css';
import { useState } from 'react';
import ModalInfo from '../ModalInfoProduct/ModalInfo';
import { Product } from '../../util/Product';
import useImageUrl from '../../hooks/useImageUrl';
const ProductCard = ({ product }: { product: Product }) => {
    const [open, onOpen] = useState(false);
    const { imageURL } = useImageUrl(product.image[0].image);
    return (
        <>
            <div className={styles.product_container}>
                <div className={styles.product_image__wrapper}>
                    <img
                        height={160}
                        src={imageURL}
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
            <ModalInfo
                product={product}
                open={open}
                onOpen={onOpen}
            ></ModalInfo>
        </>
    );
};
export default ProductCard;
