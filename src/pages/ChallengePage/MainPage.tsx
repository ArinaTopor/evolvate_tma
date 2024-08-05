import ChellengeCard from '../../components/ChellengeCard/ChellengeCard';
import listIco from '../../assets/todo.svg';
import styles from './MainPage.module.css';
import { getAllTags, getCountTagTasks } from '../../api/api.task';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TagCount, TaskTag } from '../../util/Task';
const MainPage = () => {
    const [challenges, setChallenges] = useState<TaskTag[]>([]);
    const [count, setCount] = useState<TagCount[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchChallenges = async () => {
            try {
                const data = await getAllTags();
                const counts = await getCountTagTasks();
                setChallenges(data);
                setCount(counts);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchChallenges();
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
                    {challenges.map((challenge) => (
                        <ChellengeCard
                            key={challenge.id}
                            title={challenge.name}
                            cost={200}
                            countTask={
                                count.find((c) => (c.id = challenge.id))
                                    ?.count || 0
                            }
                            category={challenge.id}
                            image={challenge.image}
                        ></ChellengeCard>
                    ))}
                </div>
            </div>
        </main>
    );
};
export default MainPage;
