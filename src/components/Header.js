const logo = '/logo.png'
const search = '/search.svg'
const accountCircle = '/account_circle.jpg'
const cart = '/shopping_cart.jpg'
import { useNavigate } from 'react-router-dom'
import styles from '../css/components/header.module.css'

function Header (){
    const nav = useNavigate();
    return(
        <header className={styles.header}>
            <img src={logo} className={styles.logo} onClick={()=>nav("/")} />
            <div className={styles.searchBar}>
                <img src={search} className={styles.search}/>
                <input type="text" className={styles.searchInput}/>
            </div>
            <img src={accountCircle} className={styles.accountCircle}/>
            <img src={cart} className={styles.cart} onClick={()=>nav("/cart")}/>
        </header>
    )
}
export default Header