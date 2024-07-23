import BackButton from '../../components/BackButton/BackButton';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Products } from '../../consts/ProductData';
import styles from './Shop.module.css';
const Shop = () => {
    return (
        <main className={styles.shop}>
            <h2>Магазин</h2>
            <div>
                <BackButton children='Назад' link='/' />
            </div>
            {Products.map((product) => (
                <div key={product.id}>
                    <ProductCard product={product} />
                </div>
            ))}
        </main>
    );
};
export default Shop;
