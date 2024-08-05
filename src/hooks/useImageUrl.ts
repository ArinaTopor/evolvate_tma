import { useEffect, useState } from 'react';
import { getImage } from './getImage';

const useImageUrl = (path: string) => {
    const [imageURL, setImageURL] = useState('');
    useEffect(() => {
        const fetchImage = async () => {
            const url = await getImage(path);
            if (url) {
                setImageURL(url);
            }
        };

        fetchImage();
    }, [path]);
    return {
        imageURL,
    };
};
export default useImageUrl;
