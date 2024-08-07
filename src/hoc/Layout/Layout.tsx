import AccountCard from '../../components/AccountCard/AccountCard';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './Layout.module.css';
import { useEffect, useState } from 'react';
import qr from '../../assets/qr_bot.jpg';
import { useAuth } from '../../context/UserAuth';

const Layout = () => {
    const [isPhone, setIsPhone] = useState(true);
    const { isLoggedIn } = useAuth();
    const location = useLocation();

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
    if (!isPhone) {
        return (
            <div className={styles.desktop}>
                <h1>Откройте приложение в своем телефоне.</h1>
                <img src={qr} width={150} />
            </div>
        );
    }

    return isLoggedIn() ? (
        <main className={styles.bg}>
            <Header />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <AccountCard />
                <Outlet />
            </div>
        </main>
    ) : (
        <Navigate to='/welcome' state={{ from: location }} replace />
    );
};
export default Layout;
