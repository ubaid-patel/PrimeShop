import styles from '../../css/components/checkout/deliveryaddress.module.css'
import { getSavedAddresses } from '../../services/accountService'
function DeliveryAddress() {
    return (
        <div className={styles.deilvery_address}>
            <h2>Your Addresses</h2>
            <div className={styles.addesses}>
                {
                    getSavedAddresses().map((address) => {
                        return <div className={styles.address}>
                            <input type='radio' className={styles.address_radio} value={address.id} />
                            <h3 className={styles.name}>{address.name + " "}</h3>
                            <span>{Object.values(address).slice(2, 6).toString()}, India</span>
                            <button className={styles.edit_button}>Edit address</button>
                        </div>
                    })
                }
            </div>
            <button className={styles.add_address}>
                <img src="/plus.svg" />
                <span>Add a new Address</span>
            </button>
            <div className={styles.use_address}>
                <button className={styles.use_address}>
                    Use this address
                </button>
            </div>
        </div>
    )
}
export default DeliveryAddress