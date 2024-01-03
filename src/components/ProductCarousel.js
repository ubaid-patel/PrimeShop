const  arrowImg = '/arrow-back-ios-new.svg';
import styles from '../css/components/product_carousel.module.css'
import ProductCard from './ProductCard'
function ProductCarousel({ items,name }) {
    return (
        <div className={styles.main}>
            <span className={styles.name}>{name}</span>
            <div className={styles.container}>
                <img src={arrowImg} className={styles.back} />
                <div className={styles.items}>
                    {items.map((item) => {
                        return (
                            <div className={styles.item}>
                                <ProductCard details={item} />
                            </div>
                        )
                    })}
                </div>
                <img src={arrowImg} className={styles.forward} />
            </div>
        </div>
    )
}
export default ProductCarousel