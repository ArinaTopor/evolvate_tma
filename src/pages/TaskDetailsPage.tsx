import { useParams } from 'react-router-dom';
import { Category, Data, Task } from '../consts/Data';
import styles from './TaskDetailsPage.module.css';
import BadgeMoney from '../components/BadgeMoney';
import { MoneyVariants } from '../consts/MoneyVariants';
import StepsTask from '../components/StepTask';
import FlashMobDescription from '../components/custom-input/Text';
import BackButton from '../components/BackButton';

const TaskDetailsPage = () => {
    const params = useParams();
    const task: Task | undefined = Data.find(
        (task) => task.id.toString() === params.id
    );
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
