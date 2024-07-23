import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import arrowDown from '../../assets/arrowDown.svg';
import { OptionT } from '../../util/OptionType';
import Option from './Option';
import styles from './Select.module.css';
type SelectProps = {
    selected: OptionT | null;
    options: OptionT[];
    placeholder?: string;
    mode?: 'rows' | 'cells';
    status?: 'default' | 'invalid';
    onChange?: (selected: OptionT['value']) => void;
    onClose?: () => void;
    width: string;
    height?: string;
    radius?: string;
    padding?: string;
};

const Select = (props: SelectProps) => {
    const {
        mode = 'rows',
        options,
        placeholder,
        status = 'default',
        selected,
        onChange,
        onClose,
        width,
        height,
        radius = '5px',
        padding,
    } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const placeholderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const { target } = event;
            if (target instanceof Node && !rootRef.current?.contains(target)) {
                isOpen && onClose?.();
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        const placeholderEl = placeholderRef.current;
        if (!placeholderEl) return;

        const handleEnterKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                setIsOpen((prev) => !prev);
            }
        };
        placeholderEl.addEventListener('keydown', handleEnterKeyDown);

        return () => {
            placeholderEl.removeEventListener('keydown', handleEnterKeyDown);
        };
    }, []);

    const handleOptionClick = (value: OptionT['value']) => {
        setIsOpen(false);
        onChange?.(value);
    };
    const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div
            className={styles.selectWrapper}
            ref={rootRef}
            data-is-active={isOpen}
            data-mode={mode}
            data-testid='selectWrapper'
        >
            <div
                className={styles.placeholder}
                data-status={status}
                data-selected={!!selected?.value}
                onClick={handlePlaceHolderClick}
                role='button'
                tabIndex={0}
                ref={placeholderRef}
                style={{
                    width: width,
                    height: height,
                    borderRadius: radius,
                    padding: padding,
                }}
            >
                {selected?.title || placeholder}
                <img src={arrowDown} className={styles.arrow} />
            </div>
            {isOpen && (
                <ul
                    className={styles.select}
                    data-testid='selectDropdown'
                    style={{ width: width }}
                >
                    {options.map((option) => (
                        <Option
                            key={option.value}
                            option={option}
                            onClick={handleOptionClick}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
