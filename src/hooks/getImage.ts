const DEMO_URL = 'https://demo.evolvate.ru';
export const getImage = async (path: string) => {
    try {
        const response = await fetch(`${DEMO_URL}${path}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        const imageObjectURL = URL.createObjectURL(blob);
        return imageObjectURL;
    } catch (error) {
        console.error(
            'There has been a problem with your fetch operation:',
            error
        );
    }
};
