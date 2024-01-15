import styles from '../css/components/suggestion_box.module.css'
function SuggestionBox({show}){
    const obj  = {
        icon:"/search.svg",
        title:"This is the main component the best and solid"
    }
    const data = [obj,obj,obj,obj,obj,obj,obj]
    return(
        <div className={(show)?styles.main:`${styles.main} ${styles.hide}`}>
            {data.map((item)=><div className={styles.suggestion}>
                <img src={item.icon} className={styles.icon}/>
                <h2 className={styles.title}>{item.title}</h2>
            </div>
            )}
        </div>
    )
}
export default SuggestionBox