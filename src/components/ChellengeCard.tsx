import styles from './ChellengeCard.module.css';
import { TagColor } from '../consts/TagColor';
import money from '../assets/money.svg';
import camera from '../assets/camera.svg';
const ChellengeCard = ({
    title,
    cost,
    category,
    countTask,
}: {
    title: string;
    cost: number;
    category: number;
    countTask: number;
}) => {
    return (
        <div
            className={styles.card_wrapper}
            style={{ backgroundColor: `${TagColor[category - 1]}` }}
        >
            <div className={styles.card_header}>
                <img src={camera}></img>
                <span>
                    <p>+{cost}</p>
                    <img src={money} width={8}></img>
                </span>
            </div>
            <h3>{title}</h3>
            <p>{countTask} заданий</p>
        </div>
    );
};
export default ChellengeCard;
