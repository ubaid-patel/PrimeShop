import React from 'react';
import styles from '../css/pages/cart.module.css'
import ProductCarousel from '../components/common/ProductCarousel';
import { getAllProducts, getProduct, getRecomendations, normalizeProduct } from '../services/productService';
import Header from '../components/common/Header';
import { useNavigate } from 'react-router-dom';
import { getCartItems } from '../services/commonService';

function Cart() {
    const nav = useNavigate();
    const newItems = [];
    getCartItems().forEach(pid=>newItems.push(normalizeProduct(getProduct(pid),[0,0])));
    console.log(newItems)
    const cartTotal = newItems.reduce((prev, curr) => prev +=curr.price ,newItems[0].price);
    console.log(cartTotal)
    return (
        <React.Fragment>
            <Header/>
            <div className={styles.cart_page}>
                <div className={styles.cart}>
                    <div className={styles.cart_heading}>
                        <h1>Shooping Cart</h1>
                        <button className={styles.deselect_btn}>Deselect all items</button>
                        <span className={styles.price_label}>Price</span>
                    </div>
                    {newItems.map((data) => <div className={styles.product}>
                        <img src={data.images[0]} className={styles.thumbnail} />
                        <div className={styles.details}>
                            <h2 className={styles.title}>{data.title}</h2>
                            <span className={styles.stock}>{(data.stock > 0 ? "IN STOCK" : "OUT OF STOCK")}</span>
                            <span className={styles.size}>Size: {data.size}</span>
                            <span className={styles.color}>Color: {data.name}</span>
                            <button className={styles.qty}>QTY:
                                <select>
                                    {Array.from({length:6},(value)=><option>{value}</option>)}
                                </select> 
                            </button>
                            <button className={styles.delete}>Delete</button>
                            <button className={styles.save}>Save for later</button>
                            <button className={styles.more}>See more like this</button>
                            <button className={styles.share}>share</button>
                        </div>
                        <div className={styles.price}>
                            <span className={styles.discount}>
                                {Math.round(((data.mrp - data.price) / data.mrp) * 100)}% off 
                            </span>
                            <span className={styles.limited_deal}>Limited time deal</span>
                            <span className={styles.price}>{data.price}</span>
                            <span className={styles.mrp}>M.R.P.:{data.mrp}</span>
                        </div>
                    </div>)}
                    <div className={styles.sub_total}>
                        {`Subtotal(1 item):₹ ${cartTotal}`}
                    </div>
                </div>
                <div className={styles.proceed_buy}>
                    <div className={styles.cart_valume}></div>
                    <span className={styles.order_eligibiity}>Your order is eligible for FREE Delivery. Choose FREE Delivery option at checkout.</span>
                    <h3>Subtotal {`(${newItems.length + 1} item)`}: ₹{cartTotal}</h3>
                    <button onClick={()=>nav("/checkout/dd")}>Proceed to buy</button>
                </div>
            </div>
            <ProductCarousel name={"You Might also Like"} items={getRecomendations("faetured")}/>
        </React.Fragment>
    )
}
export default Cart;