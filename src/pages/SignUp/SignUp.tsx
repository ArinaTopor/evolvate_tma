import CustomInput from '../../components/custom-input/CustomInput';
import mascot from '../../assets/Mascot.svg';
import message from '../../assets/signUpMessage.svg';
import {
    emailValidator,
    phoneValidator,
    required,
} from '../../hooks/useValidation';
import styles from './SingUp.module.css';
import { getDevisions } from '../../api/Devision';
const SignUp = () => {
    const data = getDevisions();
    console.log(data);
    return (
        <div className={styles.form_wrapper}>
            <h1>Регистрация</h1>
            <form>
                <CustomInput
                    placeholder='электронная почта'
                    name='email'
                    validators={[required, emailValidator]}
                ></CustomInput>
                <CustomInput
                    placeholder='телефон'
                    name='phone'
                    validators={[required, phoneValidator]}
                ></CustomInput>
                <CustomInput
                    placeholder='пароль'
                    name='password'
                    validators={[required]}
                ></CustomInput>
                <button className={styles.submit_btn}>Отправить</button>
            </form>
            <div className={styles.mascot_container}>
                <img src={mascot}></img>
                <img src={message}></img>
            </div>
        </div>
    );
};
export default SignUp;
