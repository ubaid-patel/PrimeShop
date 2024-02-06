import { useState } from 'react'
import styles from '../../css/components/product/product_Info.module.css'
import { getProduct, getRatings, normalizeProduct } from '../../services/productService'
function ProductInfo() {

    const product = normalizeProduct(getProduct(), [0, 0]);
    const ratings = getRatings();
    const [activeColor, setActiveColor] = useState("Navy")
    const [activeSize, setActiveSize] = useState(0)
    return (
        <div className={styles.info}>
            <h2 className={styles.title}>{product.title}</h2>
            <div className={styles.ratings}>
                <div>
                    <span>{ratings.star.toFixed(1)}</span>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" />
                </div>
                <span>{ratings.reviews * 50} Ratings & {ratings.reviews} Reviews</span>
            </div>
            <div className={styles.price_details}>
                <span className={styles.price}>₹{product.price}</span>
                <span className={styles.mrp}>₹{product.mrp}</span>
                <span className={styles.discount}>{Math.ceil(((product.mrp - product.price) / product.mrp) * 100)}% off</span>
            </div>

            <div className={styles.color_heading}>
                <span className={styles.color_title}>Colour:</span><span className={styles.active_color}>
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
                <span className={styles.size_title}>Size:</span> <span className={styles.active_size}>
                    {activeSize}
                </span>
            </div>
            <div className={styles.sizes}>
                {
                    product.variants[1].options.map((size) => {
                        return (
                            <div className={styles.size} onClick={() => setActiveSize(size)}>{size.name}</div>
                        )
                    })
                }
            </div>
            <div className={styles.product_details}>
                {product.description}
            </div>
        </div>
    )
}
export default ProductInfo
