import React from 'react';
import styles from '../css/pages/cart.module.css'
import { getProduct, normalizeProduct } from '../services/productService';
import Header from '../components/common/Header';
import { useNavigate } from 'react-router-dom';
import { getCartItems } from '../services/commonService';
import { CartItem } from '../components/common/CartItem';

function Cart() {
    const nav = useNavigate();
    const newItems = [];
    getCartItems().forEach(pid => newItems.push(normalizeProduct(getProduct(pid), [0, 0])));
    console.log(newItems)
    const cartTotal = newItems.reduce((prev, curr) => prev += curr.price, newItems[0].price);
    console.log(cartTotal)
    return (
        <React.Fragment>
            <Header />
            <div className={styles.cart_page}>
                <div className={styles.cart_contents}>
                    <div className={styles.address}>
                        <h2>From saved addreses</h2>
                        <div><button>Enter delivery pincode</button></div>
                    </div>
                    <div className={styles.cart}>
                        {newItems.map(data => <CartItem data={data} />)}
                    </div>
                </div>
                <div className={styles.price_breakup}>
                    <div>
                        <h2>PRICE DETAILS</h2>
                    </div>
                    <span></span>
                    <table>
                        <tr><td>Price (4 items)</td><td>₹15,195</td></tr>
                        <tr><td>Discount</td><td className={styles.green}>- ₹15,195</td></tr>
                        <tr><td>Buy more & save more</td><td className={styles.green}>- ₹15,195</td></tr>
                        <tr><td>Secured Packaging Fee</td><td>₹15,195</td></tr>
                        <tr><td>Delivery Charges</td><td>₹15,195</td></tr>
                    </table>
                    <h2 className={styles.savings}>You will save ₹7,387 on this order</h2>
                    <div className={styles.place_order}>
                        <h2>₹50,000</h2>
                        <div><button>PLACE ORDER</button></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Cart;