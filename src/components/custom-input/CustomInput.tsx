import React from 'react';
import { useInput } from '../../hooks/useInput';
import { Validator } from '../../hooks/useValidation';
import styles from './CustomInput.module.css';
const CustomInput = ({
    placeholder,
    name,
    validators,
    type,
    value,
    setValue,
}: {
    placeholder: string;
    name: string;
    validators: Validator<string>[];
    type?: string;
    value: string;
    setValue: (value: string) => void;
}) => {
    const input = useInput(value, setValue, validators);
    return (
        <React.Fragment>
            <input
                className={styles.input}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(e) => input.onChange(e)}
                onBlur={input.onBlur}
                type={type}
            ></input>
            {input.error && input.isDirty && (
                <p className={styles.error}>{input.message}</p>
            )}
        </React.Fragment>
    );
};
export default CustomInput;
