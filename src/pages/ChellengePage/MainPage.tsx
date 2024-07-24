import ChellengeCard from '../../components/ChellengeCard/ChellengeCard';
import listIco from '../../assets/todo.svg';
import styles from './MainPage.module.css';
import { getAllTags, TaskTag } from '../../api/api.task';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
    const [chellenges, setChellenges] = useState<TaskTag[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchChellenges = async () => {
            try {
                const data = await getAllTags();
                setChellenges(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchChellenges();
    }, []);
    const handleNavigate = (path: string) => {
        navigate(path);
    };
    return (
        <main>
            <div className={styles.chellenge_wrapper}>
                <div className={styles.chellenge_header}>
                    <span>
                        <img src={listIco} width={20} height={20}></img>
                        <h2>Челленджи</h2>
                    </span>
                    <button
                        className={styles.btn}
                        onClick={() => handleNavigate('/tasks/Все')}
                    >
                        Все челленджи
                    </button>
                </div>
                <div className={styles.chellenge_content}>
                    {chellenges.map((chellenge) => (
                        <ChellengeCard
                            key={chellenge.id}
                            title={chellenge.name}
                            cost={200}
                            countTask={200}
                            category={chellenge.id}
                        ></ChellengeCard>
                    ))}
                </div>
            </div>
        </main>
    );
};
export default MainPage;
