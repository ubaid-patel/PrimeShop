import React from 'react'
import styles from '../../css/components/product_gallery/filter.module.css'
import { getFilters } from '../../services/commonService'
import PriceRange from './PriceRange';
function Filters() {
    const data = getFilters();
    return (
        <div className={styles.filters}>
            <div className={styles.heading}>
                <h2>Filters</h2>
                <button>CLEAR ALL</button>
            </div>
            <div className={styles.applied_filters}>

            </div>
            <PriceRange/>
            {
                data.map((item) => {
                    return (
                        <React.Fragment>
                            <div className={styles.filter}>
                                <h3>{item.name}</h3>
                                <img src="/expand.svg" alt="" srcset="" />
                            </div>
                            <div className={styles.options}>
                                {item.list.map((option) => {
                                    return (
                                        <div className={styles.item}>
                                            <input type="checkbox" value={option.value} />
                                            <span className={styles.option_name}>{option.title}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}
export default Filters