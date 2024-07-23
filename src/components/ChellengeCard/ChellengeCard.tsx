import styles from './ChellengeCard.module.css';
import { TagColor } from '../../consts/TagColor';
import camera from '../../assets/camera.svg';
import { useNavigate } from 'react-router-dom';
import BadgeMoney from '../BadgeMoney/BadgeMoney';
import { MoneyVariants } from '../../consts/MoneyVariants';
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
    const navigate = useNavigate();
    const handleClick = (title: string) => {
        navigate(`/tasks/${title}`);
    };
    return (
        <div
            className={styles.card_wrapper}
            style={{ background: `${TagColor[category - 1]}` }}
            onClick={() => handleClick(title)}
        >
            <div className={styles.card_header}>
                <img src={camera}></img>
                <BadgeMoney text={`+ ${cost}`} variant={MoneyVariants.white} />
            </div>
            <h3>{title}</h3>
            <p>{countTask} заданий</p>
        </div>
    );
};
export default ChellengeCard;
