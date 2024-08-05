import { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import CartItem from '../../components/CartItem/CartItem';
import { useCart } from '../../context/CartContext';
import styles from './Cart.module.css';
import { CartType } from '../../util/Product';
import { buyProducts } from '../../api/api.product';

const Cart = () => {
    const { addedItems, setAddedItems, totalPrice } = useCart();
    const [showNotification, setShowNotification] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<CartType[]>([]);
    const [error, setError] = useState<boolean>(false);
    const addToCart = () => {
        const newItems: CartType[] = addedItems.map((product) => ({
            user_id: Number(localStorage.getItem('user_id')),
            product_id: product.id,
            variant_id: product.variant_id,
        }));
        setCartItems([...cartItems, ...newItems]);
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addToCart();
        setError(false);
        const response = await buyProducts(cartItems);
        if (response === 'success!') {
            setShowNotification(true);
            setAddedItems([]);
        } else {
            setError(true);
        }
    };
    return (
        <div className={styles.cart_container}>
            <h2>Корзина</h2>
            <BackButton children='В магазин' link='/shop' />
            {!showNotification && addedItems.length > 0 ? (
                <div>
                    <div className={styles.cart_content__wrapper}>
                        {addedItems.map((item) => (
                            <CartItem key={item.id} product={item}></CartItem>
                        ))}
                    </div>
                    {totalPrice >
                        Number(localStorage.getItem('coins_count')) && (
                        <p className={styles.cart_balance}>
                            Вам не хватает:{' '}
                            {totalPrice -
                                Number(
                                    localStorage.getItem('coins_count')
                                )}{' '}
                            монет
                        </p>
                    )}
                    <form onSubmit={handleSubmit}>
                        <button
                            className={styles.cart_btn}
                            type='submit'
                            disabled={
                                totalPrice >
                                    Number(
                                        localStorage.getItem('coins_count')
                                    ) || error
                            }
                        >
                            {error ? 'Что-то пошло не так.' : 'Отправить'}
                        </button>
                    </form>
                </div>
            ) : (
                showNotification &&
                !error && (
                    <div className={styles.cart_notification}>
                        <p>
                            Ваш заказ принят. <br /> С вами свяжется менеджер
                        </p>
                    </div>
                )
            )}
            {!showNotification && addedItems.length === 0 && (
                <div className={styles.cart_notification}>
                    <p>
                        В вашей корзине пока ничего нет. <br /> Добавьте первый
                        товар!
                    </p>
                </div>
            )}
        </div>
    );
};
export default Cart;
