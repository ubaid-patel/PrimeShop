import styles from '../../css/common/product_card.module.css'
import { Link } from 'react-router-dom'
function ProductCard({ details }) {
    return (
        <Link to={'/product/'+details.pid}>
            <div className={styles.product}>
                <img className={styles.image} src={details.colors[0].pics[0]} />
                <p className={styles.title}>{details.title}</p>
                <span className={styles.color}>{details.colors[0].name}</span>
                <span className={styles.price}>₹{details.price}</span>
                <span className={styles.mrp}>₹{details.mrp}</span>
                <span className={styles.discount}>{Math.round(((details.mrp-details.price)/details.mrp)*100)}%</span>
            </div>
        </Link>
    )
}
export default ProductCard