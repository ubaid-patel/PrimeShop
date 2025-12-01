import { useEffect, useState } from 'react'
import styles from '../../css/components/product/product_Info.module.css'
import { getProduct, getRatings, normalizeProduct } from '../../services/productService'
import React from 'react'

// Generate rating summary from product.reviews
function generateRatingSummary(product) {
    const reviews = product.reviews || [];
    const total = reviews.length;

    if (total === 0) {
        return {
            star: 0,
            reviews: 0,
            starPercent: [0, 0, 0, 0, 0]
        };
    }

    let sum = 0;
    const count = [0, 0, 0, 0, 0]; // index 0 = 1-star

    reviews.forEach(r => {
        sum += r.rating;
        count[r.rating - 1] += 1;
    });

    const average = sum / total;

    // convert count → %
    const percent = count.map(c => (c / total) * 100);

    return {
        star: average,
        reviews: total,
        starPercent: percent
    };
}

function ProductInfo({activeVariants,setActiveVariants,product,activeColor,setActiveColor}) {

    let mrp = product.colors[0].variants[0].mrp
    let price = product.colors[0].variants[0].price

    const variants = product.colors.find(c => c.cid === activeColor);

   

    useEffect(() => {
        if (variants) {
            setActiveVariants(() => {
                let obj = {};
                variants.variants.forEach(value => {
                    obj[value.vid] = value.subVariants[0].svid;
                });

                return (obj);
            });
        }
    }, [variants]);

    const ratings = generateRatingSummary(product);



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
                    product.colors.map((item) => {
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
                                {activeVariants && variant.subVariants.find(sv => sv.svid === activeVariants[variant.vid])?.name}

                            </span>

                        </div>
                        <div className={styles.variants}>
                            {variant.subVariants.map((item, i) => {
                                return (

                                    <div className={styles.variant} key={i} onClick={() => setActiveVariants(
                                        { ...activeVariants, [variant.vid]: item.svid })}>
                                        {item.name}
                                    </div>

                                );
                            })}
                        </div>
                    </React.Fragment>
                ))
            }


            <div className={styles.product_details}>
                {product.discription}
            </div>
        </div>
    )
}
export default ProductInfo
