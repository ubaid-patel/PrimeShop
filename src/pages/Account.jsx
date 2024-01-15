import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import styles from '../css/pages/account.module.css'
import Profileinfo from '../components/ProfileInfo';
import ManageAddress from '../components/ManageAddress';
import Header from '../components/Header';
import GiftCard from '../components/GiftCard';
import AccountContent from '../components/AccountContent';

export default function Account() {
    const nav = useNavigate();
    const path = useParams();
    const data = [
        {
            title: "Account settings", links: [{ title: "Profile information", location: "/account/profile" },
            { title: "Manage Addresses", location: "/account/addresses" }], icon: "/account.svg"
        },

        {
            title: "Payments", links: [{ title: "Gift Cards", location: "/account/gift_cards" },
            { title: "Saved Cards", location: "/account/cards" }, { title: "Saved UPI", location: "/account/saved_vpa" }], icon: "/wallet.svg"
        },
        {
            title: "My Stuff", links: [{ title: "My coupons", location: "/account/my_coupons" },
            { title: "My Review & Ratings", location: "/account/my_reviews" }, { title: "My Wishlist", location: "/account/wishlist" },
            { title: "All Notifications", location: "/account/notifications" }], icon: "/mystuff.svg"
        },

    ]
    return (
        <>
            <Header />
            <div className={styles.main}>
                <aside className={styles.sidebar}>
                    <div className={styles.greetings}>
                        <img src="/profile-pic.svg" />
                        <div>
                            <span>Hello,</span>
                            <h3>Primeshop Customer</h3>
                        </div>
                    </div>
                    <div className={styles.options}>
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
                    <AccountContent/>
                </div>
            </div>
        </>
    )
}