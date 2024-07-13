import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import TaskCard from '../components/TaskCard';
import styles from './TaskPage.module.css';
import AccountCard from '../components/AccountCard';
import { Category, Data } from '../consts/Data';

const TaskPage = () => {
    const params = useParams();
    const category: string =
        Object.keys(Category).find(
            (key) => Category[key] === params.category
        ) ?? 'all';
    return (
        <main className={styles.wrapper}>
            <AccountCard />
            <h2>
                Задания в категории <br />
                <span className={styles.tasks_title}>{params.category}</span>
            </h2>
            <BackButton children='Назад к категориям' link='/'></BackButton>
            {Data.map(
                (task) =>
                    task.tag_id.toString() === category && (
                        <TaskCard key={task.id} task={task} />
                    )
            )}
        </main>
    );
};
export default TaskPage;
