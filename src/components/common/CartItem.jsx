import styles from '../../css/common/cart_item.module.css'
export function CartItem({data}) {
    return (
        <div className={styles.product}>
            <div className={styles.thumbnail}><img src={data.images[0]} /></div>
            <div className={styles.details}>
                <div className={styles.prod_head}>
                    <h2 className={styles.title}>{data.title}</h2>
                    <h3 className={styles.delivery}>Delivery by Fri Feb 2 | ₹40Free</h3>
                </div>
                <div className={styles.size_color}>Size: 10,Green</div>

                <span className={styles.mrp}>₹{data.mrp}</span>
                <span className={styles.price}>₹{data.price}</span>
                <span className={styles.discount}>
                    {Math.round(((data.mrp - data.price) / data.mrp) * 100)}% off
                </span>

                <div className={styles.controls}>
                    <div className={styles.quantity}>
                        <button>-</button>
                        <input type="text" defaultValue={1} />
                        <button>+</button>
                    </div>
                    <h2 className={styles.save}>SAVE FOR LATER</h2>
                    <h2 className={styles.delete}>REMOVE</h2>
                </div>

            </div>

        </div>
    )
}