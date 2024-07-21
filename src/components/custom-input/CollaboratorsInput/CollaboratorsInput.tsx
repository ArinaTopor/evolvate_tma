import { KeyboardEventHandler, useState } from 'react';
import styles from './CollaboratorsInput.module.css';
import remove from '../../../assets/close.svg';
const CollaboratorsInput = ({
    collabList,
    setCollabList,
}: {
    collabList: string[];
    setCollabList: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
    const [value, setValue] = useState<string>('');
    const onChange = (mail: React.ChangeEvent<HTMLInputElement>) => {
        setValue(mail.target.value);
    };
    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleAdd();
        }
    };

    const handleAdd = () => {
        if (value && !collabList.includes(value)) {
            setCollabList([...collabList, value]);
            setValue('');
        }
    };

    const handleDeleteItem = (index: number) => {
        const updatedItems = [...collabList];
        updatedItems.splice(index, 1);
        setCollabList(updatedItems);
    };
    return (
        <div className={styles.input_container}>
            <div>
                {collabList?.map((email, index) => (
                    <div key={index} className={styles.email_container}>
                        <p>{email}</p>
                        <img
                            src={remove}
                            onClick={() => handleDeleteItem(index)}
                            width={18}
                        ></img>
                    </div>
                ))}
            </div>
            <input
                className={styles.input_select}
                name='collaborators'
                placeholder='Укажите email соавтора'
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};
export default CollaboratorsInput;
