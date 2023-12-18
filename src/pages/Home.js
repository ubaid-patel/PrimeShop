import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import ProductCarousel from "../components/ProductCarousel";
import Footer from "../components/Footer";
import React from "react";
import getRecomendations from "../api-calls/getRecomendations";

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