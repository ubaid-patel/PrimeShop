import { useNavigate } from 'react-router-dom'
import styles from '../css/components/buybox.module.css'
function BuyBox() {
    const nav = useNavigate()
    let details = { price: 1999, stock: 900, seller: "", delivery: { charges: null, time: 5, validity: 6, location: "Ubaid Patel Gola k Shahabad 585228" } }
    return (
        <div className={styles.buy_box}>
            <h2 className={styles.price}>₹{details.price}</h2>
            <div className={styles.delivery}>
                <span className={styles.delivery_charges}>
                    {(details.delivery.charges == null) ? "FREE delivery" : details.delivery.charges + " delivery charges"}
                </span>
                <span className={styles.delivery_day}>Monday ,27 December</span>
                <span className={styles.delivery_validity}>Order within 17 hrs 23mins</span>
            </div>
            <div className={styles.location}>
                <img src={"/location.svg"} />
                <span>Deliver to Ubaid patel Gola k</span>
            </div>
            <span className={styles.stock}>
                {(details.stock > 0) ? "IN STOCK" : "OUT OF Stock"}
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