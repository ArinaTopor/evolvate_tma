import { useParams } from 'react-router-dom';
import { Category } from '../../consts/Data';
import styles from './TaskDetailsPage.module.css';
import BadgeMoney from '../../components/BadgeMoney/BadgeMoney';
import { MoneyVariants } from '../../consts/MoneyVariants';
import StepsTask from '../../components/StepTask/StepTask';
import FlashMobDescription from '../../components/custom-input/Text';
import BackButton from '../../components/BackButton/BackButton';
import { Task } from '../../util/Task';
import { getTask } from '../../api/api.task';
import { useEffect, useState } from 'react';

const TaskDetailsPage = () => {
    const params = useParams();
    const [task, setTask] = useState<Task | undefined>();
    useEffect(() => {
        const fetchData = async () => {
            if (params.id) {
                const response = await getTask(params.id);
                setTask(response);
            }
        };
        fetchData();
    }, [params]);

    return (
        <main>
            {task && (
                <div style={{ width: '100%', textAlign: 'start' }}>
                    <BackButton
                        children='Назад к заданиям'
                        link={`/tasks/${Category[task.tag_id]}`}
                    />
                </div>
            )}
            {task !== undefined ? (
                <div className={styles.task_container}>
                    <h2>{task.name}</h2>
                    <FlashMobDescription>
                        {task.description}
                    </FlashMobDescription>
                    <div className={styles.score}>
                        <p>За выполнение вам будет начислено: </p>
                        <BadgeMoney
                            variant={MoneyVariants.white}
                            text={task.score.toString()}
                        />
                    </div>
                    <StepsTask task={task} />
                </div>
            ) : (
                <h2>Произошла ошибка. Попробуйте позже</h2>
            )}
        </main>
    );
};
export default TaskDetailsPage;
