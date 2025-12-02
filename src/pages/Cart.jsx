import React, { useState, useEffect } from 'react';
import styles from '../css/pages/cart.module.css'
import { getProduct, normalizeProduct } from '../services/productService';
import Header from '../components/common/Header';
import { useNavigate } from 'react-router-dom';
import { getCartItems } from '../services/commonService';
import { CartItem } from '../components/common/CartItem';

const tpr = { "category": { "primary": 10, "sub": 101 }, "delivery": { "charges": 40, "time": 2 }, "pid": "HJ1001", "name": "Cool T-Shirt", "thumbnail": "http://10.234.6.118:3001/images/carou1.jpg", "title": "Comfort Cotton Tee", "discription": "A premium cotton t-shirt for everyday wear.", "commonImages": ["http://10.234.6.118:3001/images/carou2.jpg", "http://10.234.6.118:3001/images/carou3.jpg"], "colors": [{ "cid": 2, "color": "Red", "images": ["http://10.234.6.118:3001/images/carou1.jpg", "http://10.234.6.118:3001/images/carou1.jpg"], "variants": [{ "name": "Type", "price": 779, "mrp": 699, "vid": "ER1", "subVariants": [{ "price": 499, "mrp": 699, "name": "S", "svid": 1, "stock": 20, "_id": "688601acf03f90ef7f48be2f" }, { "price": 8999, "mrp": 699, "name": "Y", "svid": 2, "stock": 15, "_id": "688601acf03f90ef7f48be30" }], "_id": "688601acf03f90ef7f48be2e" }, { "name": "Size", "price": 499, "mrp": 699, "vid": "VR1", "subVariants": [{ "price": 47899, "mrp": 699, "name": "S", "svid": 1, "stock": 20, "_id": "688601acf03f90ef7f48be2f" }, { "price": 499, "mrp": 699, "name": "M", "svid": 2, "stock": 15, "_id": "688601acf03f90ef7f48be30" }], "_id": "688601acf03f90ef7f48be2e" }], "_id": "688601acf03f90ef7f48be2d" }, { "cid": 6, "color": "Green", "images": ["http://10.234.6.118:3001/images/carou1.jpg", "http://10.234.6.118:3001/images/carou1.jpg"], "variants": [{ "name": "Type", "price": 499, "mrp": 699, "vid": "ER1", "subVariants": [{ "price": 499, "mrp": 699, "name": "S", "svid": 1, "stock": 20, "_id": "688601acf03f90ef7f48be2f" }, { "price": 499, "mrp": 699, "name": "Y", "svid": 2, "stock": 15, "_id": "688601acf03f90ef7f48be30" }], "_id": "688601acf03f90ef7f48be2e" }, { "name": "Size", "price": 499, "mrp": 699, "vid": "VR1", "subVariants": [{ "price": 499, "mrp": 699, "name": "S", "svid": 1, "stock": 20, "_id": "688601acf03f90ef7f48be2f" }, { "price": 499, "mrp": 699, "name": "M", "svid": 2, "stock": 15, "_id": "688601acf03f90ef7f48be30" }], "_id": "688601acf03f90ef7f48be2e" }], "_id": "688601acf03f90ef7f48be2d" }], "brand": "BrandX", "returnable": 1, "replaceable": 1, "reviews": [, { "name": "Alice", "rating": 4, "review": "Great quality shirt!", "photos": ["/carou1.jpg"], "_id": "688601acf03f90ef7f48be31" }, { "name": "Alice", "rating": 4, "review": "Great quality shirt!", "photos": ["/carou1.jpg"], "_id": "688601acf03f90ef7f48be31" }, { "name": "Alice", "rating": 3, "review": "Great quality shirt!", "photos": ["/carou1.jpg"], "_id": "688601acf03f90ef7f48be31" }, { "name": "Alice", "rating": 2, "review": "Great quality shirt!", "photos": ["/carou1.jpg"], "_id": "688601acf03f90ef7f48be31" }], "__v": 0 }

function Cart() {

    
    const [newItems, setNewItems] = useState([]);

    useEffect(() => {
        // For testing you use only TPR:
        const cart = [tpr, tpr, tpr];   // simulate 3 items in cart
        setNewItems(cart);
    }, []);

    useEffect(() => {setTotal(cartTotal);}, [newItems]);

     // ✅ CART TOTAL (Dynamic Price * Qty)
    const cartTotal = newItems.reduce((total, item) => {
        const color = item.colors[0];
        const variant = color.variants[0];
        const sub = variant.subVariants[0];
        return total + sub.price;
    }, 0);

    const [total,setTotal] = useState(0);

    const nav = useNavigate();

    // ✅ Instead of mapping to normalized products you force TPR for cartItem
    // Fix: Keep newItems as an array of items (using TPR for testing)

   

    return (
        <React.Fragment>
            <Header />

            <div className={styles.cart_page}>

                <div className={styles.cart_contents}>

                    {/* ADDRESS SECTION */}
                    <div className={styles.address}>
                        <h2>From saved addresses</h2>
                        <div><button>Enter delivery pincode</button></div>
                    </div>

                    {/* CART ITEMS */}
                    <div className={styles.cart}>
                        {newItems.map((item, index) =>
                            <CartItem key={index} data={item} total={total} setTotal={setTotal}/>
                        )}
                    </div>

                </div>


                {/* PRICE BREAKDOWN */}
                <div className={styles.price_breakup}>
                    <div>
                        <h2>PRICE DETAILS</h2>
                    </div>

                    <span></span>

                    <table>
                        <tr>
                            <td>Price ({newItems.length} items)</td>
                            <td>₹{total}</td>
                        </tr>

                        <tr>
                            <td>Discount</td>
                            <td className={styles.green}>- ₹0</td>
                        </tr>

                        <tr>
                            <td>Buy more & save more</td>
                            <td className={styles.green}>- ₹0</td>
                        </tr>

                        <tr>
                            <td>Secured Packaging Fee</td>
                            <td>₹29</td>
                        </tr>

                        <tr>
                            <td>Delivery Charges</td>
                            <td>₹{tpr.delivery.charges}</td>
                        </tr>
                    </table>

                    <h2 className={styles.savings}>
                        You will save ₹0 on this order
                    </h2>

                    {/* PLACE ORDER */}
                    <div className={styles.place_order}>
                        <h2>₹{total + tpr.delivery.charges + 29}</h2>

                        <div><button>PLACE ORDER</button></div>
                    </div>

                </div>

            </div>

        </React.Fragment>
    )
}

export default Cart;
