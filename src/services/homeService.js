import { apiServer } from "../components/config";

export function getCategories() {
    const categories = [
        { name: "Jeans", icon: "pant.png" },
        { name: "Shirts", icon: "shirt.png" },
        { name: "Shoes", icon: "shoes.png" },
        { name: "Perfumes", icon: "perfume.png" },
        { name: "Accessories", icon: "watch.png" }
    ]
    return (categories)
}

export function getAppSettings() {
    return new promise((resolve, reject) => {
        const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    fetch(apiServer + "/settings", requestOptions)
        .then((response) => response.text())
        .then((result) => { 
            // console.log(result);
        resolve(JSON.parse(result)) ; })
        .catch((error) => console.error(error));
    });
    
}

export async function getCarousel() {
    const settings = await getAppSettings();
    console.log(settings);
    if (settings && settings.carousel && settings.carousel.length > 0) {
        return settings.carousel;
    }else {return ([{ endpoint: "#", img: "carou6.jpg" }])}

}