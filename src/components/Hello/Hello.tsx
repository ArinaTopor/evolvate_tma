import { useEffect, useState } from 'react';
import Mascot from '../assets/Mascot.svg';
import bubble from '../assets/wolke.svg';
import styles from './Hello.module.css';
import Header from '../Header/Header';
const Hello = () => {
    const messages = [
        'Приветствую, вас в нашем терминале Evolvate',
        'Здесь вы увидите пример механики заданий с элементами геймификации',
        'Нужно будет решать разные задачи и получать монетки',
        'На монеты вы можете купить корпоративный мерч',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('');
    const [showBibbles, setShowBubbles] = useState([
        { id: 0, show: false },
        { id: 1, show: false },
        { id: 2, show: false },
        { id: 3, show: false },
    ]);

    useEffect(() => {
        if (currentIndex < messages.length - 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => prevIndex + 1);
                setAnimationClass(styles.fadeOut);
                setShowBubbles((prevState) =>
                    prevState.map((item, index) =>
                        index === currentIndex ? { ...item, show: true } : item
                    )
                );
                setTimeout(() => {
                    setCurrentMessageIndex(
                        (prevIndex) => (prevIndex + 1) % messages.length
                    );

                    setAnimationClass(styles.fadeIn);
                }, 1500);
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [currentIndex, messages, showBibbles]);

    return (
        <div className={styles.main}>
            <Header />
            <div>
                <div
                    className={`${styles.bubble} ${
                        showBibbles[0].show ? styles.animated : ''
                    }`}
                    style={{
                        opacity: showBibbles[0].show ? '1' : '0',
                        animationDelay: `${0 * 0.5}s`,
                    }}
                >
                    Приветствую, вас в нашем терминале Evolvate
                </div>
                <div
                    className={`${styles.bubble} ${
                        showBibbles[1].show ? styles.animated : ''
                    }`}
                    style={{
                        opacity: showBibbles[1].show ? '1' : '0',
                    }}
                >
                    Здесь вы увидите пример механики заданий с элементами
                    геймификации
                </div>
                <div
                    className={`${styles.bubble} ${
                        showBibbles[2].show ? styles.animated : ''
                    }`}
                    style={{
                        opacity: showBibbles[2].show ? '1' : '0',
                    }}
                >
                    Нужно будет решать разные задачи и получать монетки
                </div>
                <div className={styles.container}>
                    <img src={Mascot}></img>
                    <div className={styles.chat}>
                        <img src={bubble} />
                        <p className={`${styles.chatBubble} ${animationClass}`}>
                            {messages[currentMessageIndex]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hello;
