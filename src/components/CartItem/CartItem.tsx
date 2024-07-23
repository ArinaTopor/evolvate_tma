import mock from '../../assets/term.png';
import remove from '../../assets/close.svg';
import { MoneyVariants } from '../../consts/MoneyVariants';
import { Product } from '../../consts/ProductData';
import BadgeMoney from '../BadgeMoney/BadgeMoney';
import styles from './CartItem.module.css';
import { useCart } from '../../util/CartContext';
const CartItem = ({ product }: { product: Product }) => {
    const { removeItem } = useCart();
    return (
        <div className={styles.item_wrapper}>
            <div className={styles.item_image}>
                <img src={mock} width={70}></img>
            </div>
            <div className={styles.item_info}>
                <div className={styles.item_info__text}>
                    <h3>{product.name}</h3>
                    <div className={styles.item_info__footer}>
                        <BadgeMoney
                            text={product.price.toString()}
                            variant={MoneyVariants.yellow}
                        ></BadgeMoney>
                        <span className={styles.item_variant}>XL</span>
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
