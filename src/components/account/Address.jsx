import styles from '../../css/components/account/address.module.css'
export function Address({ address }) {
    return (
        <div className={styles.address}>
            <div className={styles.head}>
            <div className={styles.menu}>
                    <div className={styles.dot}/>
                    <div className={styles.dot}/>
                    <div className={styles.dot}/>
                </div>
                <button>{address.type}</button>
                <div className={styles.options}>
                    <button onClick={() => { editAddress(address) }}>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.name}>{address.name} {address.mobile[0]}</div>
                <div className={styles.address_summary}>
                    {`${address.address},${address.locality},${address.city},${address.state}`}
                    <span> - {address.pincode}</span>
                </div>
            </div>
        </div>
    )
}