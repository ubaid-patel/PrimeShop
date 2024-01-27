import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import styles from '../css/pages/account.module.css'
import Profileinfo from '../components/account/ProfileInfo';
import ManageAddress from '../components/account/ManageAddress';
import Header from '../components/common/Header';
import GiftCard from '../components/account/GiftCard';
import AccountContent from '../components/account/AccountContent';
import { getAccountSettings } from '../services/accountService';

export default function Account() {
    const nav = useNavigate();
    const path = useParams();
    const data = getAccountSettings();
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