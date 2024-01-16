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
function Product() {
    const pid = useParams();
    return (
        <React.Fragment>
            <Header/>
            <div className={styles.product}>
            <ImageGallery />
            <ProductInfo />
            <BuyBox/>
        </div>
            <ProductCarousel items={getRecomendations("featured")} name={"Similar Products"}/>
            <Reviews/>
        </React.Fragment>
    )
}
export default Product