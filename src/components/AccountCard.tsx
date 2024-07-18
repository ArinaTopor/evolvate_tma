import money from '../assets/yellowMoney.svg';
import avatar from '../assets/defaulPhoto.png';
import styles from './AccountCard.module.css';
import cart from '../assets/cart.svg';
import { useCart } from '../util/CartContext';
import { useNavigate } from 'react-router-dom';
const AccountCard = () => {
    const { addedItems } = useCart();
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.photo_wrapper}>
                <img src={avatar}></img>
            </div>
            <div className={styles.info}>
                <p>Владимир Константинов</p>
                <div>
                    <div>
                        <img src={money}></img>
                        <p>1556</p>
                    </div>
                    <div style={{ marginLeft: '12px', cursor: 'pointer' }}>
                        <img src={cart} onClick={() => navigate('/cart')}></img>
                        {addedItems.length}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AccountCard;
