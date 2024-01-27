import { useState } from "react"
import AddressForm from "./AddressForm"
import { getSavedAddresses } from "../../services/accountService"
import styles from '../../css/components/account/manage_address.module.css'

export default function ManageAddress() {
    const [addAddress, setAddAddress] = useState(false)
    
    return (
        <div className={styles.main}>
            <h3>Manage Addresses</h3>
            {(!addAddress) &&
                <button className={styles.add_address} >
                    <img src="/plus.svg" alt="" />
                    <span>ADD A NEW ADDRESS</span>
                </button>
            }
            <AddressForm/>
            <div className={styles.addresses}>
                {
                    getSavedAddresses().map((address) => {
                        return<div className={styles.address}>
                            <div className={styles.head}>
                                <button>{address.type}</button>
                                <div className={styles.menu}>
                                    <div className={styles.dot}></div><div className={styles.dot}></div><div className={styles.dot}></div>
                                </div>
                                <div className={styles.options}>
                                    <button onClick={()=>{editAddress(address)}}>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                            <div className={styles.body}>
                                <div className={styles.name}>{address.name} {address.mobile}</div>
                                <div className={styles.address_summary}>
                                    {`${address.address},${address.locality},${address.city},${address.state}`}
                                    <span> - {address.pincode}</span>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
