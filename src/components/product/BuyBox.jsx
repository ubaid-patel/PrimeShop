import { useNavigate } from 'react-router-dom'
import styles from '../../css/components/product/buybox.module.css'
import { getProduct } from '../../services/productService'
import { getSavedAddresses } from '../../services/accountService'
function BuyBox() {
    const nav = useNavigate()
    let product  = getProduct();
    return (
        <div className={styles.buy_box}>
            <h2 className={styles.price}>₹{product.variants[0].options[0].price}</h2>
            <div className={styles.delivery}>
                <span className={styles.delivery_charges}>
                    {(product.delivery.charges == null) ? "FREE delivery" : product.delivery.charges + " delivery charges"}
                </span>
                <span className={styles.delivery_day}>Monday ,27 December</span>
                <span className={styles.delivery_validity}>Order within 17 hrs 23mins</span>
            </div>
            <div className={styles.location}>
                <img src={"/location.svg"} />
                <span>Deliver to Ubaid patel Gola k</span>
            </div>
            <span className={styles.stock}>
                {(product.variants[0].options[0].stock > 0) ? "IN STOCK" : "OUT OF Stock"}
            </span>
            <div className={styles.quantity}>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <button className={styles.add_cart}>Add to Cart</button>
            <button className={styles.buy_now} onClick={()=>nav("/checkout/sss")}>Buy Now</button>
            <div className={styles.secure_transaction}>
                <img src={'/lock.svg'}></img> Secure Transcation
            </div>
            <div className={styles.add_wishlist}>
                Add to wish List
            </div>
        </div>
    )
}
export default BuyBox