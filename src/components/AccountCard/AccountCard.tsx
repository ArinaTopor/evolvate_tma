import money from '../../assets/yellowMoney.svg';
import avatar from '../../assets/defaulPhoto.png';
import styles from './AccountCard.module.css';
import cart from '../../assets/cart.svg';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useTelegram } from '../../hooks/useTelegram';
const AccountCard = () => {
    const { addedItems } = useCart();
    const navigate = useNavigate();
    const { user } = useTelegram();
    return (
        <div className={styles.container}>
            <div className={styles.photo_wrapper}>
                <img src={user?.photo_url ?? avatar} alt='avatar'></img>
            </div>
            <div className={styles.info}>
                <p>
                    {user?.first_name} {user?.last_name}
                </p>
                <div>
                    <div>
                        <img src={money}></img>
                        <p>{localStorage.getItem('coins_count')}</p>
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
