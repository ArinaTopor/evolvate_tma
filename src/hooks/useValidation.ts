import { useEffect, useState } from 'react';

export type Validator<T> = (params?: T) => Promise<ValidationResult>;
type ValidationResult = string | null;
// type GetValidator<Options, Params> = (options?: Options) => Validator<Params>;

export const emailValidator: Validator<string> = async (value) => {
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return re.test(String(value).toLowerCase()) ? null : 'Неккоректный email';
};

export const phoneValidator: Validator<string> = async (value) => {
    const re = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d- ]{7,10}$/;
    return re.test(String(value).toLowerCase())
        ? null
        : 'Неккоректный номер телефона';
};

export const required: Validator<string> = async (
    value,
    message = 'Обязательное поле'
) => {
    return value && value.length > 0 ? null : message;
};

export const useValidation = <T>(value: T, validators: Validator<T>[]) => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    useEffect(() => {
        const runValidations = async () => {
            for (let i = 0; i < validators.length; i++) {
                const result = await validators[i](value);
                if (result !== null) {
                    setError(true);
                    setMessage(result);
                    return;
                }
            }
            setError(false);
            setMessage('');
        };

        runValidations();
    }, [value, validators]);
    return {
        error,
        message,
    };
};
