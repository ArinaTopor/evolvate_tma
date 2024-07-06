import React from 'react';
import { useInput } from '../../hooks/useInput';
import { Validator } from '../../hooks/useValidation';
import styles from './CustomInput.module.css';
const CustomInput = ({
    placeholder,
    name,
    validators,
}: {
    placeholder: string;
    name: string;
    validators: Validator<string>[];
}) => {
    const value = useInput('', validators);
    return (
        <React.Fragment>
            <input
                className={styles.input}
                name={name}
                placeholder={placeholder}
                value={value.value}
                onChange={(e) => value.onChange(e)}
                onBlur={value.onBlur}
            ></input>
            {value.error && value.isDirty && (
                <p className={styles.error}>{value.message}</p>
            )}
        </React.Fragment>
    );
};
export default CustomInput;
