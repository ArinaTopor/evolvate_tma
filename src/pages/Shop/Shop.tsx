import { useEffect, useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Shop.module.css';
import { getAllProducts } from '../../api/api.product';
import { Product } from '../../util/Product';
const Shop = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts();
                setProducts(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchProducts();
    }, []);
    return (
        <main className={styles.shop}>
            <h2>Магазин</h2>
            <div>
                <BackButton children='Назад' link='/' />
            </div>
            {products.map((product) => (
                <div key={product.id}>
                    <ProductCard product={product} />
                </div>
            ))}
        </main>
    );
};
export default Shop;
