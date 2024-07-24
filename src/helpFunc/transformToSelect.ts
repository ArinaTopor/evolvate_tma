import { OptionT } from '../util/OptionType';
type Extractor<T> = (item: T) => string;
type HasId = {
    id: string | number;
};
export const transformDataForSelect = <T extends HasId>(
    data: T[],
    titleExtractor: Extractor<T>
): OptionT[] => {
    return data.map((item) => ({
        value: item.id.toString(),
        title: titleExtractor(item),
    }));
};
