import styles from '../css/pages/products.module.css'
import ProductCard from '../components/common/ProductCard'
import React from 'react'
import { getRecomendations } from '../services/productService';
import Filters from '../components/product_gallery/Filters';
import Header from '../components/common/Header';
function Products(){
    const products = getRecomendations("featured").concat(getRecomendations("featured")).concat(getRecomendations("featured")).concat(getRecomendations("featured")).concat(getRecomendations("features"));
    return(
        <React.Fragment>
            <Header/>
            <div className={styles.main}>
                <aside className={styles.sidebar}>
                    <Filters/>
                </aside>
                <div className={styles.products}>
                    <div className={styles.sorts_cont}>
                    <div className={styles.sorts}>
                        <h3>Sort By</h3>
                        <h3>Popularity</h3>
                        <h3>Price -- Low to High</h3>
                        <h3>Price -- Low to High</h3>
                        <h3>Newest First</h3>
                        <h3>Discount</h3>
                    </div>
                    </div>
                    <div className={styles.all_products}>
                    {products.map((product)=>{
                        return <div className={styles.product}><ProductCard product={product} variant={[0,0]}/></div>
                    })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Products