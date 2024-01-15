import styles from '../css/components/categories.module.css'
function Categories(){
    //Categories array
    const categories = [
        {name:"Jeans",icon:"pant.png"},
        {name:"Shirts",icon:"shirt.png"},
        {name:"Shoes",icon:"shoes.png"},
        {name:"Perfumes",icon:"perfume.png"},
        {name:"Accessories",icon:"watch.png"}
    ]
    return(
        <div className={styles.main}>
            <span className={styles.title}>Categories</span>
            <div className={styles.background}>
            <div className={styles.categories}>
                {categories.map((category)=>{
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