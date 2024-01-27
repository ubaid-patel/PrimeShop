import styles from '../../css/components/home/categories.module.css'
import { getCategories } from '../../services/homeService'
function Categories(){
    return(
        <div className={styles.main}>
            <span className={styles.title}>Categories</span>
            <div className={styles.background}>
            <div className={styles.categories}>
                {getCategories().map((category)=>{
                    return <div className={styles.category}>
                        <img className={styles.icon} src={category.icon}/>
                        <span className={styles.name}>{category.name}</span>
                    </div>
                })}
            </div>
            </div>
        </div>
    )
}
export default Categories