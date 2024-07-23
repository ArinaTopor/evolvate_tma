import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';
const BackButton = ({ children, link }: { children: string; link: string }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(link);
    };
    return (
        <button className={styles.back_button} onClick={handleClick}>
            {children}
        </button>
    );
};
export default BackButton;
