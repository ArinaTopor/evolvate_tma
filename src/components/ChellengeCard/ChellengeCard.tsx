import styles from './ChellengeCard.module.css';
import { TagColor } from '../../consts/TagColor';
import { useNavigate } from 'react-router-dom';
import BadgeMoney from '../BadgeMoney/BadgeMoney';
import { MoneyVariants } from '../../consts/MoneyVariants';
import useImageUrl from '../../hooks/useImageUrl';
const ChellengeCard = ({
    title,
    cost,
    category,
    countTask,
    image,
}: {
    title: string;
    cost: number;
    category: number;
    countTask: number;
    image: string;
}) => {
    const navigate = useNavigate();
    const { imageURL } = useImageUrl(image);

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
                <img src={imageURL}></img>
                <BadgeMoney text={`+ ${cost}`} variant={MoneyVariants.white} />
            </div>
            <h3>{title}</h3>
            <p>{countTask} заданий</p>
        </div>
    );
};
export default ChellengeCard;
