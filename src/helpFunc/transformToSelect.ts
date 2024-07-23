import { Division } from '../api/Division';
import { OptionT } from '../util/OptionType';

export const transformDataForSelect = (data: Division[]): OptionT[] => {
    return data.map((item) => ({
        value: item.id.toString(),
        title: item.name,
    }));
};
