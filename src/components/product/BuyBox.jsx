import { useNavigate } from 'react-router-dom'
import styles from '../../css/components/product/buybox.module.css'
import { getProduct } from '../../services/productService'
function BuyBox() {
    const nav = useNavigate()
    let product = getProduct();
    return (
        <div className={styles.buy_box}>
            <h2 className={styles.price}>₹{product.variants[0].options[0].price}</h2>
            <div className={styles.delivery}>
                <span className={styles.delivery_charges}>
                    {(product.delivery.charges == null) ? "Free delivery" : product.delivery.charges + " delivery charges"}
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
            <div className={styles.buttons}>
                <button className={styles.add_cart}>
                    <img src="/white_cart.svg" alt="" />
                    <span>Add to Cart</span>
                </button>
                <button className={styles.buy_now} onClick={() => nav("/checkout/sss")}>
                    <img src="/flash.svg" alt="" />
                    <span>Buy Now</span>
                </button>
            </div>
            <div className={styles.secure_transaction}>
                
                <div><img src={'/lock.svg'}/> </div>
                <div>Secure Transcation</div>
            </div>
            <div className={styles.add_wishlist}>
                <img src="/like.svg" alt="" />
                <span>Add to wish List</span>
            </div>
        </div>
    )
}
export default BuyBox