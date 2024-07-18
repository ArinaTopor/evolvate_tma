import { Product } from '../consts/ProductData';
import styles from './ModalInfo.module.css';
import Dialog from './Dialog';
import mock from '../assets/term.png';
import money from '../assets/yellowMoney.svg';
import FlashMobDescription from './custom-input/Text';
import { useCart } from '../util/CartContext';
const options = [
    {
        title: 'XS',
        value: '01',
    },
    {
        title: 'S',
        value: '02',
    },
    {
        title: 'M',
        value: '03',
    },
    {
        title: 'L',
        value: '04',
    },
    {
        title: 'XL',
        value: '05',
    },
];
const ModalInfo = ({
    product,
    open,
    onOpen,
}: {
    product: Product;
    open: boolean;
    onOpen: (state: boolean) => void;
}) => {
    // const [varinat, setvariantValue] = useState('');
    // const handleVariantSelect = (value: string) => {
    //     setvariantValue(value);
    // };
    const { onAdd } = useCart();
    // const selectedVariant = options.find((item) => item.value === varinat);
    const onAddHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const variant = formData.get('variant') as string;

        console.log({
            product,
            variant,
        });

        onAdd(product);
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
                    <img src={mock} />
                </div>
                <FlashMobDescription>{product.description}</FlashMobDescription>
                <p className={styles.product_select}>
                    Выберите {product.variant_name.toLowerCase()}
                </p>
                <form onSubmit={(e) => onAddHandler(e)}>
                    <div className={styles.select_wrapper}>
                        <select name='variant'>
                            {options.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.title}
                                </option>
                            ))}
                        </select>
                        <div className={styles.select_arrow}></div>
                        <div className={styles.select_arrow}></div>
                    </div>
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
