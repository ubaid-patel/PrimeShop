import styles from '../css/components/deliveryaddress.module.css'
function DeliveryAddress() {
    const obj =
    {
        name: " Ubaid Patel",
        house: " Panchayat Office",
        area: " New Area  gola k",
        city: " Shahabad",
        state: " Karnataka",
        pincode: " 585228",
        mobile: "9148749147",
        id: "A",
        landmark: "anbajhah jajna",
    }
    const data = [obj, obj, obj, obj, obj, obj, obj]
    return (
        <div className={styles.deilvery_address}>
            <h2>Your Addresses</h2>
            <div className={styles.addesses}>
                {
                    data.map((address) => {
                        return <div className={styles.address}>
                            <input type='radio' className={styles.address_radio} value={address.id} />
                            <h3 className={styles.name}>{address.name + " "}</h3>
                            <span>{Object.values(address).slice(1, 6).toString()}, India</span>
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