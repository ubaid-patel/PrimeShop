import styles from '../../css/common/product_card.module.css'
import { Link } from 'react-router-dom'
import { normalizeProduct } from '../../services/productService'

function ProductCard({product,variant}) {
    const details = normalizeProduct(product,variant)
    return (
        <Link to={'/product/'+details.pid}>
            <div className={styles.product}>
                <img className={styles.image} src={details.images[0]} />
                <p className={styles.title}>{details.title}</p>
                <span className={styles.color}>{details.varName}</span>
                <span className={styles.price}>₹{details.price}</span>
                <span className={styles.mrp}>₹{details.mrp}</span>
                <span className={styles.discount}>{Math.round(((details.mrp-details.price)/details.mrp)*100)}%</span>
            </div>
        </Link>
    )
}
export default ProductCard