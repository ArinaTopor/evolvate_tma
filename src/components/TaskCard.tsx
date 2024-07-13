import { MoneyVariants } from '../consts/MoneyVariants';
import BadgeMoney from './BadgeMoney';
import styles from './TaskCard.module.css';
import camera from '../assets/camera.svg';
import text from '../assets/write.svg';
import video from '../assets/video.svg';
import { Category, Task, Type } from '../consts/Data';
import { useNavigate } from 'react-router-dom';

const TaskCard = ({ task }: { task: Task }) => {
    const navigate = useNavigate();
    const type = Type[task.type_id];
    const handleClick = () => {
        navigate(`/tasks/${Category[task.tag_id]}/${task.id}`);
    };

    return (
        <div className={styles.taskcard_container} onClick={handleClick}>
            <div>
                <img
                    src={
                        type === 'photo'
                            ? camera
                            : type === 'video'
                            ? video
                            : text
                    }
                />
                <BadgeMoney
                    text={task.score.toString()}
                    variant={MoneyVariants.white}
                ></BadgeMoney>
            </div>
            <p>{task.name}</p>
        </div>
    );
};
export default TaskCard;
