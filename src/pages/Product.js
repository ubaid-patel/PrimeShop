import ProductCard from "../components/ProductCard"
import ProductInfo from "../components/ProductInfo"
import ImageGallery from "../components/ImageGallery"
import React from "react"
import BuyBox from "../components/BuyBox"
import getRecomendations from "../api-calls/getRecomendations"
import styles from '../css/pages/product.module.css'
import { useParams } from "react-router-dom"
import ProductCarousel from "../components/ProductCarousel"
import Reviews from "../components/Reviews"
import Header from "../components/Header"
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