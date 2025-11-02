import styles from '../../css/components/account/profile_info.module.css'

const data = JSON.parse(localStorage.getItem("data"));
const name = data.user.name.split(/\s+/)
export default function Profileinfo() {
    return (
        <div className={styles.main}>
            <div className={styles.personal_info}>
                <div className={styles.head}>
                    <h3>Personal information</h3>
                    <button>Edit</button>
                </div>
                <input type="text" placeholder="First name" value={name[0]}/>
                <input type="text" placeholder="Last name" value={(name.length>1)?(name[name.length-1]):"  "} />
                <h3 className={styles.gender}>Gender</h3>
                <input type="radio" name="gender" checked={(data.user.gender.toLowerCase()==="male")} /><span>Male</span>
                <input type="radio" name="gender" checked={(data.user.gender.toLowerCase()==="female")} /><span>Female</span>
            </div>
            <div className={styles.email}>
                <div className={styles.head}>
                    <h3>Email Address</h3>
                    <button>Edit</button>
                </div>
                <input type="text" placeholder="Email" value={data.user.email} />
            </div>
            <div className={styles.mobile}>
                <div className={styles.head}>
                    <h3>Mobile Number</h3>
                    <button>Edit</button>
                </div>
                <input type="text" placeholder="Mobile" value={data.user.mobile}/>
            </div>
        </div>
    )
}