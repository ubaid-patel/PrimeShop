import logo from '../assets/logo.png'
import search from '../assets/search.svg'
import accountCircle from '../assets/account_circle.jpg'
import cart from '../assets/shopping_cart.jpg'
import styles from '../css/components/header.module.css'

function Header (){
    return(
        <header className={styles.header}>
            <img src={logo} className={styles.logo}/>
            <div className={styles.searchBar}>
                <img src={search} className={styles.search}/>
                <input type="text" className={styles.searchInput}/>
            </div>
            <img src={accountCircle} className={styles.accountCircle}/>
            <img src={cart} className={styles.cart}/>
        </header>
    )
}
export default Header