import { useEffect, useState } from 'react'
import styles from '../../css/components/product/product_Info.module.css'
import { getProduct, getRatings, normalizeProduct } from '../../services/productService'
import React from 'react'
const tpr = {
    "category": {
        "primary": 10,
        "sub": 101
    },
    "delivery": {
        "charges": 40,
        "time": 2
    },
    "pid": "HJ1001",
    "name": "Cool T-Shirt",
    "thumbnail": "http://10.234.6.118:3001/images/carou1.jpg",
    "title": "Comfort Cotton Tee",
    "discription": "A premium cotton t-shirt for everyday wear.",
    "commonImages": [
        "http://10.234.6.118:3001/images/carou2.jpg",
        "http://10.234.6.118:3001/images/carou3.jpg"
    ],
    "colors": [
        {
            "cid": 2,
            "color": "Red",
            "images": [
                "http://10.234.6.118:3001/images/carou1.jpg",
                "http://10.234.6.118:3001/images/carou1.jpg"
            ],
            "variants": [
                {
                    "name": "Type",
                    "price": 499,
                    "mrp": 699,
                    "vid": 1,
                    "subVariants": [
                        {
                            "name": "S",
                            "svid": 1,
                            "stock": 20,
                            "_id": "688601acf03f90ef7f48be2f"
                        },
                        {
                            "svid": 2,
                            "stock": 15,
                            "_id": "688601acf03f90ef7f48be30"
                        }
                    ],
                    "_id": "688601acf03f90ef7f48be2e"
                },
                {
                    "name": "Size",
                    "price": 499,
                    "mrp": 699,
                    "vid": 1,
                    "subVariants": [
                        {
                            "name": "S",
                            "svid": 1,
                            "stock": 20,
                            "_id": "688601acf03f90ef7f48be2f"
                        },
                        {
                            "name": "M",
                            "svid": 2,
                            "stock": 15,
                            "_id": "688601acf03f90ef7f48be30"
                        }
                    ],
                    "_id": "688601acf03f90ef7f48be2e"
                }
            ],
            "_id": "688601acf03f90ef7f48be2d"
        },
        {
            "cid": 3,
            "color": "Violet",
            "images": [
                "http://10.234.6.118:3001/images/carou2.jpg",
                "http://10.234.6.118:3001/images/carou1.jpg"
            ],
            "variants": [
                {
                    "price": 499,
                    "mrp": 699,
                    "vid": 1,
                    "subVariants": [
                        {
                            "svid": 1,
                            "stock": 20,
                            "_id": "688601acf03f90ef7f48be2f"
                        },
                        {
                            "svid": 2,
                            "stock": 15,
                            "_id": "688601acf03f90ef7f48be30"
                        }
                    ],
                    "_id": "688601acf03f90ef7f48be2e"
                }
            ],
            "_id": "688601acf03f90ef7f48be2d"
        },
        {
            "cid": 1,
            "color": "Pink",
            "images": [
                "http://10.234.6.118:3001/images/carou3.jpg",
                "http://10.234.6.118:3001/images/carou1.jpg"
            ],
            "variants": [
                {
                    "price": 499,
                    "mrp": 699,
                    "vid": 1,
                    "subVariants": [
                        {
                            "svid": 1,
                            "stock": 20,
                            "_id": "688601acf03f90ef7f48be2f"
                        },
                        {
                            "svid": 2,
                            "stock": 15,
                            "_id": "688601acf03f90ef7f48be30"
                        }
                    ],
                    "_id": "688601acf03f90ef7f48be2e"
                }
            ],
            "_id": "688601acf03f90ef7f48be2d"
        }
    ],
    "brand": "BrandX",
    "returnable": 1,
    "replaceable": 1,
    "reviews": [
        {
            "name": "Alice",
            "rating": 4,
            "review": "Great quality shirt!",
            "photos": [
                "https://example.com/rev1.jpg"
            ],
            "_id": "688601acf03f90ef7f48be31"
        }
    ],
    "__v": 0
}

function ProductInfo() {

    let mrp = tpr.colors[0].variants[0].mrp
    let price = tpr.colors[0].variants[0].price


    const product = normalizeProduct(getProduct(), [0, 0]);
    const ratings = getRatings();
    const [activeColor, setActiveColor] = useState(1);
    const [activeSize, setActiveSize] = useState([0, 0])
    const [activeVariants,setActiveVariants] = useState([{}]);
    useEffect(() => {
        setActiveColor(tpr.colors[0].cid);

    }, []);
    const variants = tpr.colors.find(c => c.cid === activeColor);

    return (
        <div className={styles.info}>
            <h2 className={styles.title}>{tpr.title}</h2>
            <div className={styles.ratings}>
                <div>
                    <span>{ratings.star.toFixed(1)}</span>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" />
                </div>
                <span>{ratings.reviews * 50} Ratings & {ratings.reviews} Reviews</span>
            </div>
            <div className={styles.price_details}>
                <span className={styles.price}>₹{price}</span>
                <span className={styles.mrp}>₹{mrp}</span>
                <span className={styles.discount}>{Math.ceil(((mrp - price) / mrp) * 100)}% off</span>
            </div>

            <div className={styles.color_heading}>
                <span className={styles.color_title}>Colour:</span><span className={styles.active_color}>
                    {variants.color}
                </span>
            </div>
            <div className={styles.colors}>
                {
                    tpr.colors.map((item) => {
                        return (
                            <div className={styles.color_icon} onClick={() => setActiveColor(item.cid)}>
                                <img src={item.images[0]} />
                            </div>)
                    })
                }
            </div>
            {
                variants.variants.map((variant, index) => (
                    <React.Fragment key={index}>
                        <div className={styles.size_heading}>
                            <span className={styles.size_title}>{variant.name}:</span>
                            <span className={styles.active_size}>
                                {activeSize}
                            </span>
                        </div>
                        <div className={styles.variants}>
                            {variant.subVariants.map((item, i) => {
                                return (

                                    <div className={styles.variant} key={i} onClick={() => setActiveSize(item.name)}>
                                        {item.name}
                                    </div>

                                );
                            })}
                         </div>
                    </React.Fragment>
                ))
            }


            <div className={styles.product_details}>
                {tpr.discription}
            </div>
        </div>
    )
}
export default ProductInfo
