import React from 'react'
import CheckoutHeader from '../components/checkout/CheckoutHeader'
import DeliveryAddress from '../components/checkout/DeliveryAddress'
import Header from '../components/common/Header'
import PaymentMethods from '../components/checkout/PaymentMethods'
import styles from '../css/pages/checkout.module.css'
import ConfirmOrder from '../components/checkout/OrderCorfirm'
function Checkout() {
    return (
        <React.Fragment>
            <CheckoutHeader/>
            <div className={styles.checkout}>
            <div className={styles.order_steps}>
                <div className={styles.delivery_address}>
                <h1>1 &nbsp; Select a delivery address</h1>
                    <DeliveryAddress/>
                </div>
                <div className={styles.payment_methods}>
                <h1>2 &nbsp; Payment methods</h1>
                    <PaymentMethods/>
                </div>
                <div className={styles.payment_methods}>
                <h1>3 &nbsp; Order Confirmation</h1>
                    <ConfirmOrder/>
                </div>
            </div>
            <div className={styles.order_summary}>

            </div>
        </div>
        </React.Fragment>
    )
}
export default Checkout