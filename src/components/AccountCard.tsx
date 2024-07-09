import money from '../assets/yellowMoney.svg';
import avatar from '../assets/defaulPhoto.png';
import styles from './AccountCard.module.css';
const AccountCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.photo_wrapper}>
                <img src={avatar}></img>
            </div>
            <div className={styles.info}>
                <p>
                    Владимир <br /> Константинов
                </p>
                <div>
                    <img src={money}></img>
                    <p>1556</p>
                </div>
            </div>
        </div>
    );
};
export default AccountCard;
