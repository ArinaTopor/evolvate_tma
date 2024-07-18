import styles from './Dialog.module.css';
import close from '../assets/modalClose.svg';

const Dialog = ({
    open,
    onOpen,
    children,
}: {
    open: boolean;
    onOpen: (state: boolean) => void;
    children: React.ReactNode;
}) => {
    const handleClose = () => {
        onOpen(false);
    };

    return (
        <div
            className={styles.modal}
            style={{ display: open ? 'block' : 'none' }}
        >
            <img width={20} src={close} onClick={handleClose} alt='Close' />
            <div className={styles.modal_content}>{children}</div>
        </div>
    );
};

export default Dialog;
