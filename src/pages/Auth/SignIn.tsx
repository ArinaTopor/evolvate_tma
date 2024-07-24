import CustomInput from '../../components/custom-input/CustomInput';
import mascot from '../../assets/Mascot.svg';
import message from '../../assets/authMess.svg';
import { emailValidator, required } from '../../hooks/useValidation';
import styles from './Auth.module.css';
import { useContext, useState } from 'react';
import { AuthData, signIn } from '../../api/api.auth';
import Header from '../../components/Header/Header';
import AuthContext from '../../util/AuthContext';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const logIn = async (e: React.FormEvent) => {
        e.preventDefault();
        const authData: AuthData = {
            email: email,
            password: password,
        };
        setError('');
        const response = await signIn(authData);
        if (!response) {
            setError('Неверный email или пароль. Попробуйте снова.');
        } else {
            setAuth(true);
            navigate('/');
        }
    };
    return (
        <main className={styles.bg}>
            <Header />
            <div className={styles.form_wrapper}>
                <h1>Авторизация</h1>
                <form onSubmit={logIn}>
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
                        validators={[required]}
                        value={password}
                        setValue={setPassword}
                    ></CustomInput>
                    {error && <p className={styles.form_error}>{error}</p>}
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
        </main>
    );
};
export default SignIn;
