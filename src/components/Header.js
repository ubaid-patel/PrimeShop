import {logo} from '../../public/logo.jpg'
import {search} from '../../public/search.jpg'
import {accountCircle} from '../../public/account_circle.jpg'
import {cart} from '../../public/shopping_cart.jpg'
import {styles} from '../css/components/header.module.css'

export default Header = ()=>{
    return(
        <header id={styles.header}>
            <img src={logo} id={styles.logo}/>
            <div id={styles.searchBar}>
                <img src={search} id={styles.search}/>
                <input type="text" id={styles.searchInput}/>
            </div>
            <img src={accountCircle} id={styles.accountCircle}/>
            <img src={cart} id={styles.cart}/>
        </header>
    )
}