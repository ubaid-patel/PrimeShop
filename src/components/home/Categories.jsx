import styles from '../../css/components/home/categories.module.css'
import { getCategories } from '../../services/homeService'
import { useState, useEffect } from 'react';
function Categories() {
    const [categories, setcategories] = useState([]);

    useEffect(() => {
        async function loadData() {
            const data = await getCategories();
            console.log(data);
            setcategories(data);
        }
        loadData();
    }, []);
    return (
        <div className={styles.main}>
            <span className={styles.title}>Categories</span>
            <div className={styles.background}>
                <div className={styles.categories}>
                    {categories.map((category) => {
                        return <div className={styles.category} key={category.id}>
                            <img className={styles.icon} src={category.icon} />
                            <span className={styles.name}>{category.name}</span>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default Categories