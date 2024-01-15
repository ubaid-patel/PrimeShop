const logo = '/logo.png'
const search = '/search.svg'
const accountCircle = '/account_circle.jpg'
const cart = '/shopping_cart.jpg'
import { useNavigate } from 'react-router-dom'
import styles from '../../css/common/header.module.css'
import SuggestionBox from '../home/SuggestionBox'
import { useState } from 'react'

function Header (){
    const nav = useNavigate();
    const [search,setSearch] = useState(false)
    function showSugestions(event){
        event.preventDefault();
        // alert(event.target.value)
        if(event.target.value != ''){
            setSearch(true)
        }else{
            setSearch(false)
        }
    }
    return(
        <header className={styles.header}>
            <img src={logo} className={styles.logo} onClick={()=>nav("/")} />
            <div className={styles.searchBar}>
                <img src={search} className={styles.search}/>
                <input type="text" className={styles.searchInput} onKeyUp={showSugestions}/>
                <SuggestionBox show={search}/>
            </div>

            <img src={accountCircle} className={styles.accountCircle} onClick={()=>nav("/account/profile")}/>
            <img src={cart} className={styles.cart} onClick={()=>nav("/cart")}/>
        </header>
    )
}
export default Header