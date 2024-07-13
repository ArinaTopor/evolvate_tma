import { Product } from '../consts/ProductData';
import styles from './ModalInfo.module.css';
import close from '../assets/modalClose.svg';

const ModalInfo = ({
    product,
    open,
    onOpen,
}: {
    product: Product;
    open: boolean;
    onOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div
            className={styles.dialog_container}
            style={{ display: open ? 'block' : 'none' }}
        >
            <img
                src={close}
                onClick={() => onOpen(false)}
                width={24}
                alt='Close'
            />
            <div>
                <h2>{product.name}</h2>
                <p>Осталось: {product.balance}шт.</p>
                <img alt={product.name} />
                <p>{product.description}</p>
                <p>Выберите {product.variant_name.toLowerCase()}</p>
                <form>
                    <div>
                        <button className={styles.dialog_btn}>В КОРЗИНУ</button>
                        <span>
                            <p>{product.price}</p>
                            <img alt='price' />
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalInfo;
