import styles from '../css/components/profile_info.module.css'
export default function Profileinfo() {
    console.log(styles)
    return (
        <div className={styles.main}>
            <div className={styles.personal_info}>
                <div className={styles.head}>
                    <h3>Personal information</h3>
                    <button>Edit</button>
                </div>
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <h4>Gender</h4>
                <input type="radio" name="gender"/><span>Male</span>
                <input type="radio" name="gender"/><span>Female</span>
            </div>
            <div className={styles.email}>
                <div className={styles.head}>
                    <h3>Email Address</h3>
                    <button>Edit</button>
                </div>
                <input type="text" placeholder="Email" />
            </div>
            <div className={styles.mobile}>
                <div className={styles.head}>
                    <h3>Mobile Number</h3>
                    <button>Edit</button>
                </div>
                <input type="text" placeholder="Mobile" />
            </div>
        </div>
    )
}