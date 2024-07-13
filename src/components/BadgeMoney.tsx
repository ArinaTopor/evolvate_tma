import moneyWhite from '../assets/money.svg';
import moneyYellow from '../assets/yellowMoney.svg';
import styles from './BadgeMoney.module.css';
import { MoneyVariants } from '../consts/MoneyVariants';
const BadgeMoney = ({
    text,
    variant,
}: {
    text: string;
    variant: MoneyVariants;
}) => {
    return (
        <span
            className={
                variant === MoneyVariants.yellow
                    ? `${styles.badge} ${styles.badge_yellow}`
                    : styles.badge
            }
        >
            <p>{text}</p>
            <img
                src={
                    variant === MoneyVariants.yellow ? moneyYellow : moneyWhite
                }
                width={8}
            ></img>
        </span>
    );
};
export default BadgeMoney;
