import AccountCard from '../../components/AccountCard/AccountCard';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './Layout.module.css';
import { useEffect, useState } from 'react';
import qr from '../../assets/qr_bot.jpg';

const Layout = ({ isAuth }: { isAuth: boolean }) => {
    const [isPhone, setIsPhone] = useState(true);
    useEffect(() => {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            setIsPhone(true);
        } else {
            setIsPhone(true);
        }
    }, []);
    return isPhone ? (
        <main
            className={isAuth ? styles.bg : `${styles.bg} ${styles.bg_unauth}`}
        >
            <Header />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {isAuth && <AccountCard />}
                <Outlet />
            </div>
        </main>
    ) : (
        <div className={styles.desktop}>
            <h1>Откройте приложение в своем телефоне.</h1>
            <img src={qr} width={150} />
        </div>
    );
};
export default Layout;
