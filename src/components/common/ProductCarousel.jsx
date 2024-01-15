const  arrowImg = '/arrow-back-ios-new.svg';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/common/product_carousel.module.css'
import ProductCard from './ProductCard'
function ProductCarousel({ items,name }) {
    const nav = useNavigate()
    return (
        <div className={styles.main}>
            <span className={styles.name}>{name}</span>
            <span className={styles.more} onClick={()=>nav("/products")}>see more</span>
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