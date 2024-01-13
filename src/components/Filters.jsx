import React from 'react'
import styles from '../css//components/filter.module.css'
function Filters() {
    const obj = {
        "name": "Brand",
        "list": [{ title: "Sparx", value: "Sparx" }, { title: "Puma", value: "Puma" }, { title: "Nike", value: "Nike" },
        { title: "Adidas", value: "Adidas" }, { title: "Woodland", value: "Woodland" }],
    }
    const data = [obj, obj, obj, obj, obj, obj]
    const appliedFilters = ["₹500 - ₹3000+"]
    return (
        <div className={styles.filters}>
            <div className={styles.heading}>
                <h1>Filters</h1>
                <button>CLEAR ALL</button>
            </div>
            <div className={styles.applied_filters}>

            </div>
            <div className={styles.price_range}>
                <h3>PRICE</h3> 
                <button>CLEAR</button>
                <input type="range" min={0} max={3500} step={500} />
                <select name="min">
                    <option value={500}>{'Min'}</option>
                    {Array.from({ length: 6 }, (value) => {
                        <option value={value * 500}>{value * 500}</option>
                    })}
                </select>
                <span>to</span>
                <select name="max">
                    {Array.from({ length: 5 }, (value) => {
                        <option value={value * 500}>{value * 500}</option>
                    })}
                    <option value={3000}>3000+</option>
                </select>
            </div>
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