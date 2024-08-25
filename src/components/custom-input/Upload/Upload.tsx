import styles from './Upload.module.css';
import upload from '../../../assets/upload.svg';
import remove from '../../../assets/close.svg';
const Upload = ({
    fileList,
    setFileList,
}: {
    fileList: File[];
    setFileList: React.Dispatch<React.SetStateAction<File[]>>;
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFileList([...fileList, ...event.target.files]);
        }
    };
    const removeFile = (indexI: number) => {
        if (fileList) {
            const currentFiles = fileList.filter(
                (_, index) => index !== indexI
            );

            setFileList(currentFiles);
        }
    };
    return (
        <div>
            <label className={styles.input_file}>
                <input
                    type='file'
                    name='file'
                    accept='.jpg,.jpeg,.mp4'
                    onChange={handleChange}
                ></input>
                <span>
                    <img src={upload}></img>
                    Загрузить файл
                </span>
            </label>
            <div className='input-file-list'>
                {fileList.map((file, index) => (
                    <div key={index} className={styles.file}>
                        <p>{file.name}</p>
                        <img
                            onClick={() => removeFile(index)}
                            src={remove}
                            width={16}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Upload;
