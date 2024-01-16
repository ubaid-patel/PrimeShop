import Header from "../components/common/Header";
import Carousel from "../components/home/Carousel";
import Categories from "../components/home/Categories";
import ProductCarousel from "../components/common/ProductCarousel";
import Footer from "../components/common/Footer";
import React from "react";
import { getRecomendations } from "../services/productService";

function Home() {
    return (
        <React.Fragment>
            <Header />
            <Carousel />
            <Categories />
            <ProductCarousel items={getRecomendations("featured")} name={"Featured"} />
            <ProductCarousel items={getRecomendations("featured")} name={"Todays deals"} />
            <ProductCarousel items={getRecomendations("featured")} name={"New arrivals"} />
            <Footer />
        </React.Fragment>

    )
}
export default Home