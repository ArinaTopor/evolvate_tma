import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import TaskCard from '../../components/TaskCard/TaskCard';
import styles from './TaskPage.module.css';
import { Category } from '../../consts/Data';
import { useEffect, useState } from 'react';
import { Task } from '../../util/Task';
import { getAllTasks } from '../../api/api.task';
import { FilterData } from '../../consts/filterEnum';

const TaskPage = () => {
    const params = useParams();
    const [taskData, setTaskData] = useState<Task[]>([]);
    const [filteredData, setFilteredData] = useState<Task[]>([]);
    const [activeStatus, setActiveStatus] = useState<number>(1);
    const checkStatus = (status: number) => {
        if (status === activeStatus) {
            return `${styles.filter_btn} ${styles.active}`;
        }
        return styles.filter_btn;
    };
    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllTasks();
            if (response) {
                setTaskData(response);
                setFilteredData(response);
            }
        };
        fetchData();
    }, []);
    const category: string =
        Object.keys(Category).find(
            (key) => Category[key] === params.category
        ) ?? 'all';

    const handleFilter = (status: number) => {
        if (status === 0) {
            setFilteredData(taskData);
        } else {
            setFilteredData(taskData.filter((task) => task.status === status));
        }
        setActiveStatus(status);
    };
    return (
        <div className={styles.wrapper_task}>
            <h2>
                Задания в категории <br />
                <span className={styles.tasks_title}>{params.category}</span>
            </h2>
            <BackButton children='Назад к категориям' link='/'></BackButton>
            <div className={styles.filter}>
                <button
                    className={checkStatus(FilterData.all)}
                    onClick={() => handleFilter(FilterData.all)}
                >
                    Все
                </button>
                <button
                    className={checkStatus(FilterData.uncomplete)}
                    onClick={() => handleFilter(FilterData.uncomplete)}
                >
                    Невыполненные
                </button>
                <button
                    className={checkStatus(FilterData.complete)}
                    onClick={() => handleFilter(FilterData.complete)}
                >
                    Завершенные
                </button>
            </div>
            {category === 'all'
                ? filteredData.map((task) => (
                      <TaskCard key={task.id} task={task} />
                  ))
                : filteredData.map(
                      (task) =>
                          task.tag_id.toString() === category &&
                          task.status !== 2 && (
                              <TaskCard key={task.id} task={task} />
                          )
                  )}
        </div>
    );
};
export default TaskPage;
