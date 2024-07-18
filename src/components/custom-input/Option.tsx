import { MouseEventHandler, useEffect, useRef } from 'react';
import { OptionProps } from '../../util/OptionType';
import { OptionT } from '../../util/OptionType';
import styles from './Option.module.css';
const Option = (props: OptionProps) => {
    const {
        option: { value, title },
        onClick,
    } = props;
    const optionRef = useRef<HTMLLIElement>(null);

    const handleClick =
        (clickedValue: OptionT['value']): MouseEventHandler<HTMLLIElement> =>
        () => {
            onClick(clickedValue);
        };

    useEffect(() => {
        const option = optionRef.current;
        if (!option) return;
        const handleEnterKeyDown = (event: KeyboardEvent) => {
            if (document.activeElement === option && event.key === 'Enter') {
                onClick(value);
            }
        };

        option.addEventListener('keydown', handleEnterKeyDown);
        return () => {
            option.removeEventListener('keydown', handleEnterKeyDown);
        };
    }, [value, onClick]);

    return (
        <li
            className={styles.option}
            value={value}
            onClick={handleClick(value)}
            tabIndex={0}
            data-testid={`select-option-${value}`}
            ref={optionRef}
        >
            {title}
        </li>
    );
};
export default Option;
