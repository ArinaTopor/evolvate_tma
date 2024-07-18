export type OptionProps = {
    option: OptionT;
    onClick: (value: OptionT['value']) => void;
};
export type OptionT = { title: string; value: string };
