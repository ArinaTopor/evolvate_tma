import styles from './Header.module.css';
import close from '../assets/close.svg';
import logo from '../assets/logo.svg';
import rollUp from '../assets/rollUp.svg';
import more from '../assets/more.svg';
const Header = () => {
    return (
        <div className={styles.header_wrapper}>
            <div>
                <button className={styles.btn} style={{ marginRight: '8px' }}>
                    <img src={close}></img>
                </button>
                <img src={logo}></img>
            </div>
            <div>
                <button className={styles.btn}>
                    <img src={rollUp}></img>
                </button>
                <button className={styles.btn}>
                    <img src={more}></img>
                </button>
            </div>
        </div>
    );
};
export default Header;
