import styles from './ModalInfo.module.css';
import Dialog from '../Dialog/Dialog';
import money from '../../assets/yellowMoney.svg';
import FlashMobDescription from '../custom-input/Text';
import { useCart } from '../../context/CartContext';
import Select from '../custom-input/Select';
import { Product } from '../../util/Product';
import { transformDataForSelect } from '../../util/transformToSelect';
import useImageUrl from '../../hooks/useImageUrl';
import { useState } from 'react';
const ModalInfo = ({
    product,
    open,
    onOpen,
}: {
    product: Product;
    open: boolean;
    onOpen: (state: boolean) => void;
}) => {
    const [varinat, setvariantValue] = useState('');
    const handleVariantSelect = (value: string) => {
        setvariantValue(value);
    };
    const transformVariant = transformDataForSelect(
        product.variant,
        (item) => item.value
    );

    const { imageURL } = useImageUrl(product.image[0].image);

    const { onAdd } = useCart();
    const selectedVariant =
        transformVariant.find((item) => item.value === varinat) ||
        transformVariant[0] ||
        null;
    const onAddHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAdd(product, selectedVariant.title, Number(selectedVariant.value));
        onOpen(false);
    };
    return (
        <Dialog open={open} onOpen={onOpen}>
            <div className={styles.product_container}>
                <h2>{product.name}</h2>
                <p className={styles.balance}>
                    Осталось: {product.balance} шт.
                </p>
                <div className={styles.product_image}>
                    <img src={imageURL} alt='product' width={200} />
                </div>
                <FlashMobDescription>{product.description}</FlashMobDescription>
                <p className={styles.product_select}>
                    Выберите {product.variant_name.toLowerCase()}
                </p>
                <form onSubmit={(e) => onAddHandler(e)}>
                    <Select
                        options={transformVariant}
                        onChange={handleVariantSelect}
                        selected={selectedVariant}
                        width={
                            product.variant_name.toLowerCase() === 'размер'
                                ? '43px'
                                : '180px'
                        }
                    ></Select>
                    <div className={styles.footer}>
                        <button className={styles.shop_btn}>В КОРЗИНУ</button>
                        <div>
                            <p>{product.price}</p>
                            <img src={money} />
                        </div>
                    </div>
                </form>
            </div>
        </Dialog>
    );
};

export default ModalInfo;
