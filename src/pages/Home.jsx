import Header from "../components/common/Header";
import Carousel from "../components/home/Carousel";
import Categories from "../components/home/Categories";
import ProductCarousel from "../components/common/ProductCarousel";
import Footer from "../components/common/Footer";
import React from "react";
import { getRecomendations } from "../services/productService";
import { useState, useEffect } from "react";
function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function loadData() {
            const data = await getCarousel();
            console.log(data);
            setItems(data);
        }
        loadData();
    }, []);

    return (
        <React.Fragment>
            <Header />
            <Carousel />
            <Categories />
            {
                items.map((item) => <ProductCarousel items={getRecomendations("featured")} name={"Featured"}  key={item._id}/>)
            }
            <ProductCarousel items={getRecomendations("featured")} name={"Featured"} />
            <ProductCarousel items={getRecomendations("featured")} name={"Todays deals"} />
            <ProductCarousel items={getRecomendations("featured")} name={"New arrivals"} />
            <Footer />
        </React.Fragment>

    )
}
export default Home