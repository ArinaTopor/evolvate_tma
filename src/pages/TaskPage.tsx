import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import TaskCard from '../components/TaskCard';
import styles from './TaskPage.module.css';
import { Category, Data } from '../consts/Data';

const TaskPage = () => {
    const params = useParams();
    const category: string =
        Object.keys(Category).find(
            (key) => Category[key] === params.category
        ) ?? 'all';
    return (
        <div className={styles.wrapper_task}>
            <h2>
                Задания в категории <br />
                <span className={styles.tasks_title}>{params.category}</span>
            </h2>
            <BackButton children='Назад к категориям' link='/'></BackButton>
            <div className={styles.filter}>
                <button>Все</button>
                <button>Невыполненные</button>
                <button>Завершенные</button>
            </div>
            {category === 'all'
                ? Data.map((task) => <TaskCard key={task.id} task={task} />)
                : Data.map(
                      (task) =>
                          task.tag_id.toString() === category && (
                              <TaskCard key={task.id} task={task} />
                          )
                  )}
        </div>
    );
};
export default TaskPage;
