import { useNavigate } from 'react-router-dom'
import styles from '../css/pages/account.module.css'

export default function Account() {
    const nav = useNavigate();
    const data = [
        {
            title: "Account settings", links: [{ title: "Profile information", location: "profile" },
            { title: "Manage Addresses", location: "addresses" }], icon: "/account.svg"
        },

        {
            title: "Payments", links: [{ title: "Gift Cards", location: "gift_cards" },
            { title: "Saved Cards", location: "cards" }, { title: "Saved UPI", location: "saved_upi" }], icon: "/payments.svg"
        },
        {
            title: "My Stuff", links: [{ title: "My coupons", location: "my_coupons" },
            { title: "My Review & Ratings", location: "my_reviews" }, { title: "My Wishlist", location: "saved_upi" },
            { title: "All Notifications", location: "saved_upi" }], icon: "/my_stuff.svg"
        },

    ]
    return (
        <div className={styles.main}>
            <aside className={styles.sidebar}>
                <div className={styles.greetings}>
                    <img src="/profile-pic.svg" />
                    <div>
                        <span>Hello,</span>
                        <h3>Flipkart Customer</h3>
                    </div>
                </div>
                <div classname={styles.options}>
                    <div className={styles.my_orders}>
                        <img src="/orders.svg" />
                        <h3>MY ORDERS</h3>
                        <img src="/next.svg" />
                    </div>
                    {data.map((option) => <div className={styles.option}>
                        <div className={styles.option_head}>
                            <img src={option.icon} />
                            <h3>{option.title}</h3>
                        </div>
                        <div className={styles.option_body}>
                            {option.links.map((link) => <h3 onClick={() => nav(link.location)}>{link.title}</h3>)}
                        </div>
                    </div>
                    )}
                </div>
                <div className={styles.logout}>
                    <img src="/button.svg" alt="" />
                    <h3>LOGOUT</h3>
                </div>
            </aside>
            <div className={styles.displayer}>

            </div>
        </div>
    )
}