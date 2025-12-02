import { useEffect, useState } from "react";
import styles from '../../css/common/cart_item.module.css'

export function CartItem({ data ,total,setTotal}) {

    // PICK COLOR + VARIANT + SUBVARIANT
    const color = data.colors[0];
    const variantGroup = color.variants[0];
    const sub = variantGroup.subVariants[0];

    // PRICES
    const price = sub.price;
    const mrp = sub.mrp;

    // QUANTITY STATE
    const [qty, setQty] = useState(1);

    const increase = () => {setQty(qty + 1); setTotal(total+(price));};
const decrease = () => {
    qty > 1
        ? (setQty(qty - 1), setTotal(total - price))
        : null;
};


    // DELIVERY DATE CALCULATION
    const getDeliveryDate = () => {
        const days = data.delivery.time;
        const date = new Date();
        date.setDate(date.getDate() + days);

        return date.toLocaleDateString("en-IN", {
            weekday: "short",
            month: "short",
            day: "numeric"
        });
    };

    return (
        <div className={styles.product}>
            
            {/* PRODUCT IMAGE */}
            <div className={styles.thumbnail}>
                <img src={data.thumbnail} />
            </div>

            <div className={styles.details}>
                
                {/* TITLE & DELIVERY */}
                <div className={styles.prod_head}>
                    <h2 className={styles.title}>{data.title}</h2>

                    <h3 className={styles.delivery}>
                        Delivery by {getDeliveryDate()} | ₹{(data.delivery.charges)===0 ? "Free" : data.delivery.charges+" Delivery Charges"}
                    </h3>
                </div>

                {/* COLOR + SIZE */}
                <div className={styles.size_color}>
                    Size: {sub.name}, {color.color}
                </div>

                {/* PRICING */}
                <span className={styles.mrp}>₹{mrp}</span>
                <span className={styles.price}>₹{price}</span>
                <span className={styles.discount}>
                    {Math.round(((mrp - price) / mrp) * 100)}% off
                </span>

                {/* QUANTITY + SAVE/REMOVE */}
                <div className={styles.controls}>
                    
                    <div className={styles.quantity}>
                        <button onClick={decrease}>-</button>
                        <input type="text" value={qty} readOnly />
                        <button onClick={increase}>+</button>
                    </div>

                    <h2 className={styles.save}>SAVE FOR LATER</h2>
                    <h2 className={styles.delete}>REMOVE</h2>
                </div>

            </div>

        </div>
    );
}
