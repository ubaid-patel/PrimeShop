const logo = '/logo.png'
const search = '/search.svg'
const accountCircle = '/account_circle.jpg'
const cart = '/lock.svg'
import { useNavigate } from 'react-router-dom'
import styles from '../css/components/checkout_header.module.css'

function CheckoutHeader() {
    const nav = useNavigate();
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} onClick={() => nav("/")} />
            </div>
            <h1 className={styles.title}>Checkout</h1>
            <div className={styles.secure}>
            <img src={cart}/>
            </div>
        </header>
    )
}
export default CheckoutHeader