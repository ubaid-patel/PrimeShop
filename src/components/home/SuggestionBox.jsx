import styles from '../../css/components/home/suggestion_box.module.css'
import { performSearch } from '../../services/commonService'
function SuggestionBox({show}){
    return(
        <div className={(show)?styles.main:`${styles.main} ${styles.hide}`}>
            {performSearch().map((item)=><div className={styles.suggestion}>
                <img src={item.icon} className={styles.icon}/>
                <h2 className={styles.title}>{item.title}</h2>
            </div>
            )}
        </div>
    )
}
export default SuggestionBox