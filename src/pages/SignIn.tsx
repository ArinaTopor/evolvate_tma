import CustomInput from '../components/custom-input/CustomInput';
import mascot from '../assets/Mascot.svg';
import message from '../assets/authMess.svg';
import {
    emailValidator,
    phoneValidator,
    required,
} from '../hooks/useValidation';
import styles from './SignUp/SingUp.module.css';
import { useState } from 'react';
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className={styles.form_wrapper}>
            <h1>Авторизация</h1>
            <form>
                <CustomInput
                    placeholder='электронная почта'
                    name='email'
                    validators={[required, emailValidator]}
                    value={email}
                    setValue={setEmail}
                ></CustomInput>
                <CustomInput
                    placeholder='пароль'
                    name='password'
                    type='password'
                    validators={[required, phoneValidator]}
                    value={password}
                    setValue={setPassword}
                ></CustomInput>
                <button
                    className={styles.submit_btn}
                    disabled={email.length === 0 || password.length === 0}
                >
                    отправить
                </button>
            </form>
            <div className={styles.mascot_container}>
                <img src={mascot}></img>
                <img src={message}></img>
            </div>
        </div>
    );
};
export default SignIn;
