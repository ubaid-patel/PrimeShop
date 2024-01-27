import { useState } from 'react'
import styles from '../../css/components/product/product_Info.module.css'
import { getProduct, getRatings, normalizeProduct } from '../../services/productService'
function ProductInfo() {

    const product = normalizeProduct(getProduct(),[0,0]);
    const ratings = getRatings();
    const [activeColor, setActiveColor] = useState("Navy")
    const [activeSize, setActiveSize] = useState(0)
    return (
        <div className={styles.info}>
            <h2 className={styles.title}>{product.title}</h2>
            <div className={styles.ratings}>
                {ratings.star}
                {Array.from({ length: 5 }, () => <img src={'/star.svg'} className={styles.star} />)}
                {ratings.reviews} Reviews
            </div>
            <h2 className={styles.discount}>-{(((product.mrp - product.price) / product.mrp) * 100)}%</h2>
            <h2 className={styles.price}>₹{product.price}</h2>
            <span className={styles.mrp}>M.R.P: <span className={styles.mrp_span}>₹{product.mrp}</span></span>

            <div className={styles.color_heading}>
                Colour:<span className={styles.active_color}>
                    {activeColor}
                </span>
            </div>
            <div className={styles.colors}>
                {
                    product.variants[0].options.map((color) => {
                        return (
                            <div className={styles.color_icon} onClick={() => setActiveColor(color.name)}>
                                <img src={product.images[0]} />
                            </div>)
                    })
                }
            </div>
            <div className={styles.size_heading}>
                Size: <span className={styles.active_size}>
                    {activeSize} IN
                </span>
            </div>
            <div className={styles.sizes}>
                {
                    product.variants[1].options.map((size) => {
                        return (
                            <div className={styles.size} onClick={()=>setActiveSize(size)}>{size.name} IN</div>
                        )
                    })
                }
            </div>
            <div className={styles.productDetails}>
                {product.description}
            </div>

        </div>
    )
}
export default ProductInfo
