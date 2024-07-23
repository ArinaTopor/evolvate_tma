import { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import CartItem from '../../components/CartItem/CartItem';
import { useCart } from '../../util/CartContext';
import styles from './Cart.module.css';

const Cart = () => {
    const { addedItems } = useCart();
    const [showNotification, setShowNotification] = useState<boolean>(false);
    const handleSubmit = () => {
        console.log('Заказ оформлен:)');
        setShowNotification(true);
    };
    return (
        <div className={styles.cart_container}>
            <h2>Корзина</h2>
            <BackButton children='Назад' link='/shop' />
            {!showNotification && addedItems.length > 0 ? (
                <div>
                    <div className={styles.cart_content__wrapper}>
                        {addedItems.map((item) => (
                            <CartItem key={item.id} product={item}></CartItem>
                        ))}
                    </div>
                    <form>
                        <button onClick={handleSubmit}>Отправить</button>
                    </form>
                </div>
            ) : (
                showNotification && (
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
