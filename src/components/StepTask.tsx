import React, { useState } from 'react';
import { Task, Type } from '../consts/Data';
import Upload from './custom-input/Upload';
import CollaboratorsInput from './custom-input/CollaboratorsInput';
import styles from './StepTask.module.css';
import rollUp from '../assets/rollUp.svg';

const StepsTask = ({ task }: { task: Task }) => {
    const [visibleUpload, setVisibleUpload] = useState<boolean>(false);
    const [visibleCollab, setVisibleCollab] = useState<boolean>(false);
    const [collabList, setCollabList] = useState<string[]>([]);
    const [fileList, setFileList] = useState<File[]>([]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(collabList);
        console.log(fileList);
        setCollabList([]);
        setFileList([]);
    };
    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                {!task.is_solo ? (
                    <React.Fragment>
                        <div className={styles.step_container}>
                            <h4>Выберите соавторов</h4>
                            <img
                                width={20}
                                src={rollUp}
                                onClick={() => setVisibleCollab(!visibleCollab)}
                                className={visibleCollab ? styles.show : ''}
                            />
                        </div>
                        <div
                            style={{
                                display: visibleCollab ? 'block' : 'none',
                            }}
                        >
                            <CollaboratorsInput
                                collabList={collabList}
                                setCollabList={setCollabList}
                            />
                        </div>
                    </React.Fragment>
                ) : (
                    ''
                )}
                {Type[task.type_id] === 'photo' ||
                Type[task.type_id] === 'video' ? (
                    <React.Fragment>
                        <div className={styles.step_container}>
                            <h4>
                                Загрузите фото или видео с результатом
                                выполнения задания
                            </h4>
                            <img
                                width={20}
                                src={rollUp}
                                onClick={() => setVisibleUpload(!visibleUpload)}
                                className={visibleUpload ? styles.show : ''}
                            />
                        </div>
                        <div
                            style={{
                                display: visibleUpload ? 'block' : 'none',
                            }}
                        >
                            <p style={{ margin: '22px 0 20px 0' }}>
                                фото загружать только в формате jpeg или png,
                                размером не более 1Мб, видео загружается только
                                в формате mp4, размером не более 3Мб
                            </p>

                            <Upload
                                fileList={fileList}
                                setFileList={setFileList}
                            />
                        </div>
                    </React.Fragment>
                ) : (
                    <textarea name='text' placeholder='Комментарий'></textarea>
                )}
                <p
                    style={{
                        fontSize: '0.8rem',
                        opacity: '40%',
                        marginBottom: '10px',
                    }}
                >
                    Результат выполненного задания будет проходить модерацию до
                    24 часов. Наберитесь терпения :&#41;
                </p>
                <button className={styles.form_send} type='submit'>
                    Отправить
                </button>
            </form>
        </>
    );
};
export default StepsTask;
