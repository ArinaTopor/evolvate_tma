import AccountCard from '../components/AccountCard';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Layout.module.css';

const Layout = ({ isAuth }: { isAuth: boolean }) => {
    return (
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
    );
};
export default Layout;
