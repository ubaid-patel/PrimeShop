import { useNavigate } from 'react-router-dom'
import styles from '../../css/components/checkout/confirm_order.module.css'
function ConfirmOrder(){
    const nav = useNavigate();
    return(
        <div className={styles.confirm_order}>
            <h2>Your order has ben placed successfully</h2>
            <button onClick={()=>nav("/login")}>
                Continue
            </button>
        </div>
    )
}
export default ConfirmOrder