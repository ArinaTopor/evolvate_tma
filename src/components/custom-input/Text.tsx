import React from 'react';

interface FlashMobDescriptionProps {
    children: string;
}

const FlashMobDescription: React.FC<FlashMobDescriptionProps> = ({
    children,
}) => {
    return <div dangerouslySetInnerHTML={{ __html: children }} />;
};

export default FlashMobDescription;
