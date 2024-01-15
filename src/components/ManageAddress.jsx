import { useState } from "react"
import AddressForm from "./AddressForm"
import { addressObj, addressData } from "./config"
import styles from '../css/components/manage_address.module.css'

export default function ManageAddress() {
    const [addAddress, setAddAddress] = useState(false)
    const [addressForm, setAddressForm] = useState(addressObj)
    function showAddressForm() {
        const callback = (status,newData) =>{
            if (status === 'success'){
                setAddressForm([...addressData,newData])
            }else{
                setAddAddress(false);
                setAddressForm({...addressObj,show:false})
            }

        }
        setAddAddress(true);
        setAddressForm({...addressObj,show:true,
            callback:()=>{setAddAddress(false),setAddressForm({...addressObj,show:false})}
        })
    }
    function editAddress(address){
        setAddressForm({...addressObj,show:true,values:address,callback:()=>{setAddressForm({addressObj,show:false})}})
    }
    return (
        <div className={styles.main}>
            <h3>Manage Addresses</h3>
            {(!addAddress) &&
                <button className={styles.add_address} onClick={showAddressForm} >
                    <img src="/plus.svg" alt="" />
                    <span>ADD A NEW ADDRESS</span>
                </button>
            }
            <AddressForm data={addressForm}/>
            <div className={styles.addresses}>
                {
                    addressData.map((address) => {
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
