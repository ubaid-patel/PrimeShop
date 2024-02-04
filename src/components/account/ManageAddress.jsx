import { useState } from "react"
import AddressForm from "./AddressForm"
import { getSavedAddresses } from "../../services/accountService"
import styles from '../../css/components/account/manage_address.module.css'
import { Address } from "./Address"

export default function ManageAddress() {
    
    return (
        <div className={styles.main}>
            <h3>Manage Addresses</h3>
                <button className={styles.add_address} >
                    <img src="/plus.svg" alt="" />
                    <span>ADD A NEW ADDRESS</span>
                </button>
            <div className={styles.addresses}>
                {getSavedAddresses().map(address => <Address address={address}/>)}
            </div>
            <AddressForm/>
        </div>
    )
}
