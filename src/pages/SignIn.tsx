import CustomInput from '../components/custom-input/CustomInput';
import mascot from '../assets/Mascot.svg';
import message from '../assets/authMess.svg';
import {
    emailValidator,
    phoneValidator,
    required,
} from '../hooks/useValidation';
import styles from './SignUp/SingUp.module.css';
const SignIn = () => {
    return (
        <div className={styles.form_wrapper}>
            <h1>Авторизация</h1>
            <form>
                <CustomInput
                    placeholder='электронная почта'
                    name='email'
                    validators={[required, emailValidator]}
                ></CustomInput>
                <CustomInput
                    placeholder='пароль'
                    name='password'
                    type='password'
                    validators={[required, phoneValidator]}
                ></CustomInput>
                <button className={styles.submit_btn}>отправить</button>
            </form>
            <div className={styles.mascot_container}>
                <img src={mascot}></img>
                <img src={message}></img>
            </div>
        </div>
    );
};
export default SignIn;
