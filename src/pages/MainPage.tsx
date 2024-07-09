import AccountCard from '../components/AccountCard';
import ChellengeCard from '../components/ChellengeCard';
import listIco from '../assets/todo.svg';
import styles from './MainPage.module.css';
const MainPage = () => {
    return (
        <main>
            <AccountCard />
            <div className={styles.chellenge_wrapper}>
                <div className={styles.chellenge_header}>
                    <span>
                        <img src={listIco} width={20} height={20}></img>
                        <h2>Челленджи</h2>
                    </span>
                    <a>Все челленджи</a>
                </div>
                <div className={styles.chellenge_content}>
                    <ChellengeCard
                        title='Общение'
                        cost={200}
                        countTask={145}
                        category={1}
                    ></ChellengeCard>
                    <ChellengeCard
                        title='Эффективность'
                        cost={200}
                        countTask={145}
                        category={2}
                    ></ChellengeCard>
                    <ChellengeCard
                        title='Конфликты'
                        cost={200}
                        countTask={145}
                        category={2}
                    ></ChellengeCard>
                    <ChellengeCard
                        title='Баланс'
                        cost={200}
                        countTask={145}
                        category={1}
                    ></ChellengeCard>
                </div>
            </div>
        </main>
    );
};
export default MainPage;
