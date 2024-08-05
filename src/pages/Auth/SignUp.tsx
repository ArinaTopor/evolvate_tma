import CustomInput from '../../components/custom-input/CustomInput';
import mascot from '../../assets/Mascot.svg';
import message from '../../assets/signUpMessage.svg';
import {
    emailValidator,
    phoneValidator,
    required,
} from '../../hooks/useValidation';
import styles from './Auth.module.css';
import { getDivisions } from '../../api/api.division';
import { useEffect, useState } from 'react';
import { OptionT } from '../../util/OptionType';
import { transformDataForSelect } from '../../helpFunc/transformToSelect';
import Select from '../../components/custom-input/Select';
import { useTelegram } from '../../hooks/useTelegram';
import { RegData, signUp } from '../../api/api.auth';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [options, setOptions] = useState<OptionT[] | undefined>();
    const { user } = useTelegram();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [position, setPosition] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const regData: RegData = {
        username: user?.username || '',
        password: '',
        last_name: user?.last_name || '',
        first_name: user?.last_name || '',
        middle_name: '',
        email: '',
        phone: '',
        division_id: 0,
        division: '',
        position: '',
    };
    useEffect(() => {
        const fetchDivisions = async () => {
            try {
                const divisions = await getDivisions();
                const options = transformDataForSelect(
                    divisions,
                    (item) => item.name
                );
                setOptions(options);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchDivisions();
    }, []);
    const [varinat, setvariantValue] = useState('');
    const handleVariantSelect = (value: string) => {
        setvariantValue(value);
    };
    const selectedVariant =
        (options && options.find((item) => item.value === varinat)) ??
        (options && options[0]) ??
        null;

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        regData.division = selectedVariant?.title || '';
        regData.division_id = Number(selectedVariant?.value) ?? 1;
        regData.email = email;
        regData.password = password;
        regData.phone = phone;
        regData.position = position;
        const response = await signUp(regData);
        if (response.error) {
            setError(response.error);
        } else {
            navigate('/signIn');
        }
    };
    return (
        <main className={styles.bg}>
            <div className={styles.form_wrapper}>
                <h1>Регистрация</h1>
                <form onSubmit={handleSignUp}>
                    <CustomInput
                        placeholder='электронная почта'
                        name='email'
                        validators={[required, emailValidator]}
                        value={email}
                        setValue={setEmail}
                    ></CustomInput>
                    <CustomInput
                        placeholder='телефон'
                        name='phone'
                        validators={[required, phoneValidator]}
                        value={phone}
                        setValue={setPhone}
                    ></CustomInput>
                    <CustomInput
                        placeholder='пароль'
                        name='password'
                        validators={[required]}
                        value={password}
                        setValue={setPassword}
                    ></CustomInput>
                    {options && (
                        <Select
                            options={options}
                            onChange={handleVariantSelect}
                            selected={selectedVariant}
                            width='268px'
                            height='44px'
                            radius='10px'
                            padding='14px 15px'
                        ></Select>
                    )}
                    <CustomInput
                        placeholder='должность'
                        name='position'
                        validators={[required]}
                        value={position}
                        setValue={setPosition}
                    />
                    {error && <p className={styles.form_error}>{error}</p>}
                    <button
                        className={styles.submit_btn}
                        type='submit'
                        disabled={
                            email.length === 0 ||
                            phone.length === 0 ||
                            position.length === 0 ||
                            password.length === 0
                        }
                    >
                        Отправить
                    </button>
                </form>
                <div className={styles.mascot_container}>
                    <img src={mascot}></img>
                    <img src={message}></img>
                </div>
            </div>
        </main>
    );
};
export default SignUp;
