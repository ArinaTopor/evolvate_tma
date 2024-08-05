import remove from '../../assets/close.svg';
import { MoneyVariants } from '../../consts/MoneyVariants';
import BadgeMoney from '../BadgeMoney/BadgeMoney';
import styles from './CartItem.module.css';
import { useCart } from '../../context/CartContext';
import { ProductCart } from '../../util/Product';
import useImageUrl from '../../hooks/useImageUrl';
const CartItem = ({ product }: { product: ProductCart }) => {
    const { removeItem } = useCart();
    const { imageURL } = useImageUrl(product.image[0].image);
    return (
        <div className={styles.item_wrapper}>
            <div className={styles.item_image}>
                <img src={imageURL} width={70}></img>
            </div>
            <div className={styles.item_info}>
                <div className={styles.item_info__text}>
                    <h3>{product.name}</h3>
                    <div className={styles.item_info__footer}>
                        <BadgeMoney
                            text={product.price.toString()}
                            variant={MoneyVariants.yellow}
                        ></BadgeMoney>
                        <span className={styles.item_variant}>
                            {product.variant_title}
                        </span>
                    </div>
                </div>
                <img
                    src={remove}
                    width={12}
                    style={{ cursor: 'pointer' }}
                    onClick={() => removeItem(product.id)}
                />
            </div>
        </div>
    );
};
export default CartItem;
