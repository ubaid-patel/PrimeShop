import styles from '../../css/components/checkout/payment_methods.module.css'
function PaymentMethods() {
    return (
        <div className={styles.pay_methods}>
            <div className={styles.promo_code}>
                <input type="text" className={styles.promo_input} placeholder='Enter coupon code' />
                <button type="button">Apply</button>
            </div>
            <div className={styles.pay_gateway}>
                <h2> Payment Gateway will be implemented soon</h2>
                <button className={styles.button}>
                    Confirm Order
                </button>
            </div>
        </div>
    )
}
export default PaymentMethods