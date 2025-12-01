import { useNavigate } from 'react-router-dom'
import styles from '../../css/components/product/buybox.module.css'
import { getProduct } from '../../services/productService'
import { useEffect, useState } from "react";
function getHighestPrice(tpr, activeColor, activeVariantObj) {
    const colorObj = tpr.colors.find(c => c.cid === activeColor);
    if (!colorObj) return { price: null, mrp: null };

    let highestPrice = 0;
    let highestMrp = 0;

    for (const vid in activeVariantObj) {
        const svid = activeVariantObj[vid];

        const variantObj = colorObj.variants.find(v => v.vid === vid);
        if (!variantObj) continue;

        const subVariant = variantObj.subVariants.find(s => s.svid === svid);
        if (!subVariant) continue;

        if (subVariant.price > highestPrice) {
            highestPrice = subVariant.price;
        }

        if (subVariant.mrp > highestMrp) {
            highestMrp = subVariant.mrp;
        }
    }

    return {
        price: highestPrice,
        mrp: highestMrp
    };
}

function getDeliveryDate(tpr) {
    const daysToAdd = tpr.delivery.time || 0;

    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);

    const optionsDay = { weekday: 'long' };
    const optionsDate = { day: 'numeric', month: 'long' };

    const dayName = date.toLocaleDateString('en-US', optionsDay);
    const dateText = date.toLocaleDateString('en-US', optionsDate);

    return `${dayName}, ${dateText}`;
}

function getRandomDeliveryCountdown() {
    const minMinutes = 30;           // 30 mins minimum
    const maxMinutes = 6 * 60;       // 6 hours
    const minMinutesTotal = 2 * 60;  // 2 hours minimum

    // pick a random value between 2h and 6h
    let randomMinutes = Math.floor(Math.random() * (maxMinutes - minMinutesTotal + 1)) + minMinutesTotal;

    // ensure at least 30 minutes (already true since min is 120 minutes)
    if (randomMinutes < minMinutes) {
        randomMinutes = minMinutes;
    }

    // convert to hrs + mins
    const hrs = Math.floor(randomMinutes / 60);
    const mins = randomMinutes % 60;

    return { hrs, mins };
}




function useDeliveryCountdown() {
    const [totalSeconds, setTotalSeconds] = useState(getRandomDeliverySeconds());

    useEffect(() => {
        const interval = setInterval(() => {
            setTotalSeconds(prev => {
                if (prev <= 1) return 1; // avoid 0 or negative
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // convert to hrs, mins, secs
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return { hrs, mins, secs };
}

function getRandomDeliverySeconds() {
    const minMinutes = 2 * 60;  // 2 hours
    const maxMinutes = 6 * 60;  // 6 hours

    const randomMinutes = Math.floor(Math.random() * (maxMinutes - minMinutes + 1)) + minMinutes;

    return randomMinutes * 60; // convert to seconds
}


function BuyBox({product , activeVariants,activeColor}) {
    const nav = useNavigate()
    let oldproduct = getProduct();
    let price = getHighestPrice(product,activeColor,activeVariants);
    const { hrs, mins, secs } = useDeliveryCountdown();

    return (
        <div className={styles.buy_box}>
            <h2 className={styles.price}>₹{price.price}</h2>
            <div className={styles.delivery}>
                <span className={styles.delivery_charges}>
                    {(product.delivery.charges == null || product.delivery.charges==0) ? "Free delivery" : product.delivery.charges + " delivery charges"}
                </span>
                <span className={styles.delivery_day}>{getDeliveryDate(product)}</span>
                <span className={styles.delivery_validity}> Order within {hrs}:{mins}:{secs} secs</span>
            </div>
            <div className={styles.location}>
                <img src={"/location.svg"} />
                <span>Deliver to Ubaid patel Gola k</span>
            </div>
            <span className={styles.stock}>
                {(oldproduct.variants[0].options[0].stock > 0) ? "IN STOCK" : "OUT OF Stock"}
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