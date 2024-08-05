import React, { useState } from 'react';
import { Type } from '../../consts/Data';
import Upload from '../custom-input/Upload';
import CollaboratorsInput from '../custom-input/CollaboratorsInput/CollaboratorsInput';
import styles from './StepTask.module.css';
import rollUp from '../../assets/rollUp.svg';
import { Task } from '../../util/Task';
import { completeTask } from '../../api/api.task';

const StepsTask = ({ task }: { task: Task }) => {
    const [visibleUpload, setVisibleUpload] = useState<boolean>(false);
    const [visibleCollab, setVisibleCollab] = useState<boolean>(false);
    const [collabList, setCollabList] = useState<string[]>([]);
    const [fileList, setFileList] = useState<File[]>([]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const message = formData.get('text') as string;
        const formDataComplete = new FormData();
        formDataComplete.append(
            'user_id',
            localStorage.getItem('user_id') ?? ''
        );
        // formDataComplete.append('image', new Blob(fileList[0]))
        // formDataComplete.append('video', new Blob(fileList[0]))
        fileList.forEach((file) => {
            if (file.type.startsWith('image/')) {
                formDataComplete.append('image', file);
            } else if (file.type.startsWith('video/')) {
                formDataComplete.append('video', file);
            }
        });
        formDataComplete.append('message', message);
        formDataComplete.append('task_id', task.id.toString());
        formDataComplete.append('emails', JSON.stringify(collabList));
        formDataComplete.append('status', '2');
        const response = await completeTask(formDataComplete);
        if (response) {
            console.log(formData);
        }
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
