import { useState } from 'react';
import { useValidation, Validator } from './useValidation';

export const useInput = (
    value: string,
    setValue: (value: string) => void,
    validators: Validator<string>[]
) => {
    // const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validators);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const onBlur = () => {
        setIsDirty(true);
    };
    return {
        // value,
        onChange,
        onBlur,
        isDirty,
        ...valid,
    };
};
