import React from 'react';
import styles from '../css/pages/cart.module.css'
import ProductCarousel from '../components/ProductCarousel';
import getRecomendations from '../api-calls/getRecomendations';
function Cart() {
    const item = {
        pid: "AH89P",
        title: "SuperRep Go Training & Gym Shoes For Men",
        price: 990,
        mrp: 1990,
        colors: [
            { name: "Green", pics: ["/carou1.jpg"] },
            { name: "Red", pics: ["/carou1.jpg"] }
        ],
        sizes: [7, "M",],
        size: 7,
        color: { name: "GREEN", pics: ["/carou1.jpg"] },
        delivery: 0,
        stock: 90,
        qty: 1,
    }
    const items = [item, item, item, item, item, item, item, item]
    const cartTotal = items.reduce((prev, curr) => prev + curr.price);
    return (
        <React.Fragment>
            <div className={styles.cart_page}>
                <div className={styles.cart}>
                    <div className={styles.cart_heading}>
                        <h1>Shooping Cart</h1>
                        <button className={styles.deselect_btn}>Deselect all items</button>
                        <span className={styles.price_label}>Price</span>
                    </div>
                    {items.map((data) => <div className={styles.product}>
                        <img src={data.color.pics[0]} className={styles.thumbnail} />
                        <div className={styles.details}>
                            <h2 style={styles.title}>{data.title}</h2>
                            <span style={styles.stock}>{(data.stock > 0 ? "IN STOCK" : "OUT OF STOCK")}</span>
                            <span style={styles.size}>Size: {data.size}</span>
                            <span style={styles.color}>Color: {data.color.name}</span>
                            <button style={styles.qty}>QTY:
                                <select>
                                    {Array.from({length:6},(value)=><option>{value}</option>)}
                                </select> 
                            </button>
                            <button style={styles.delete}>Delete</button>
                            <button style={styles.save}>Save for later</button>
                            <button style={styles.more}>See more like this</button>
                            <button style={styles.share}>share</button>
                        </div>
                        <div className={styles.price}>
                            <span className={styles.discount}>{Math.round(((data.mrp - data.price) / data.mrp) * 100)}% off </span>
                            <span className={styles.limited_deal}>Limited time deal</span>
                            <span className={styles.price}>{data.price}</span>
                            <span className={styles.mrp}>M.R.P.:{data.mrp}</span>
                        </div>
                    </div>)}
                    <div style={styles.sub_total}>
                        {`Subtotal(1 item):₹ ${cartTotal}`}
                    </div>
                </div>
                <div className={styles.proceed_buy}>
                    <div className={styles.cart_valume}></div>
                    <span style={styles.order_eligibiity}>Your order is eligible for FREE Delivery. Choose FREE Delivery option at checkout.</span>
                    <h3>Subtotal {`(${items.length + 1} item)`}: ₹{cartTotal}</h3>
                    <button>Proceed to buy</button>
                </div>
            </div>
            <ProductCarousel name={"You Might also Like"} items={getRecomendations("faetured")}/>
        </React.Fragment>
    )
}
export default Cart;