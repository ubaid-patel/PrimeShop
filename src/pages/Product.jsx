import ProductCard from "../components/common/ProductCard"
import ProductInfo from "../components/product/ProductInfo"
import ImageGallery from "../components/product/ImageGallery"
import React from "react"
import BuyBox from "../components/product/BuyBox"
import { getRecomendations } from "../services/productService"
import styles from '../css/pages/product.module.css'
import { useParams } from "react-router-dom"
import ProductCarousel from "../components/common/ProductCarousel"
import Reviews from "../components/product/Reviews"
import Header from "../components/common/Header"
import { useState } from "react";
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
                    "price": 779,
                    "mrp": 699,
                    "vid": "ER1",
                    "subVariants": [
                        {
                            "price": 499,
                            "mrp": 699,
                            "name": "S",
                            "svid": 1,
                            "stock": 20,
                            "_id": "688601acf03f90ef7f48be2f"
                        },
                        {
                            "price": 8999,
                            "mrp": 699,
                            "name": "Y",
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
                    "vid": "VR1",
                    "subVariants": [
                        {
                            "price": 47899,
                            "mrp": 699,
                            "name": "S",
                            "svid": 1,
                            "stock": 20,
                            "_id": "688601acf03f90ef7f48be2f"
                        },
                        {
                            "price": 499,
                            "mrp": 699,
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
            "cid": 6,
            "color": "Green",
            "images": [
                "http://10.234.6.118:3001/images/carou1.jpg",
                "http://10.234.6.118:3001/images/carou1.jpg"
            ],
            "variants": [
                {
                    "name": "Type",
                    "price": 499,
                    "mrp": 699,
                    "vid": "ER1",
                    "subVariants": [
                        {
                            "price": 499,
                            "mrp": 699,
                            "name": "S",
                            "svid": 1,
                            "stock": 20,
                            "_id": "688601acf03f90ef7f48be2f"
                        },
                        {
                            "price": 499,
                            "mrp": 699,
                            "name": "Y",
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
                    "vid": "VR1",
                    "subVariants": [
                        {
                            "price": 499,
                            "mrp": 699,
                            "name": "S",
                            "svid": 1,
                            "stock": 20,
                            "_id": "688601acf03f90ef7f48be2f"
                        },
                        {
                            "price": 499,
                            "mrp": 699,
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
        }
    ],
    "brand": "BrandX",
    "returnable": 1,
    "replaceable": 1,
    "reviews": [
        ,
        {
            "name": "Alice",
            "rating": 4,
            "review": "Great quality shirt!",
            "photos": [
                "/carou1.jpg"
            ],
            "_id": "688601acf03f90ef7f48be31"
        },
        {
            "name": "Alice",
            "rating": 4,
            "review": "Great quality shirt!",
            "photos": [
                "/carou1.jpg"
            ],
            "_id": "688601acf03f90ef7f48be31"
        },
        {
            "name": "Alice",
            "rating": 3,
            "review": "Great quality shirt!",
            "photos": [
                "/carou1.jpg"
            ],
            "_id": "688601acf03f90ef7f48be31"
        },
        {
            "name": "Alice",
            "rating": 2,
            "review": "Great quality shirt!",
            "photos": [
                "/carou1.jpg"
            ],
            "_id": "688601acf03f90ef7f48be31"
        }
    ],
    "__v": 0
}
let mrp = tpr.colors[0].variants[0].mrp
let price = tpr.colors[0].variants[0].price

function Product() {
    const pid = useParams();
    const images = tpr.commonImages.concat(tpr.colors[0].images);
    const [activeVariants, setActiveVariants] = useState(null);
    const [activeColor, setActiveColor] = useState(tpr.colors[0].cid);
    return (
        <React.Fragment>
            <Header />
            <div className={styles.product}>
                <ImageGallery images={images} />
                <ProductInfo activeVariants={activeVariants} setActiveVariants={setActiveVariants} product={tpr} activeColor={activeColor} setActiveColor={setActiveColor}/>
                <BuyBox product={tpr} activeVariants={activeVariants} activeColor={activeColor}/>
            </div>
            <ProductCarousel items={getRecomendations("featured")} name={"Similar Products"} />
            <Reviews product={tpr}/>
        </React.Fragment>
    )
}
export default Product