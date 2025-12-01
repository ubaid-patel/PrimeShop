import { apiServer } from "../components/config";

// export function getCategories() {
//     const categories = [
//         { name: "Jeans", icon: "pant.png" },
//         { name: "Shirts", icon: "shirt.png" },
//         { name: "Shoes", icon: "shoes.png" },
//         { name: "Perfumes", icon: "perfume.png" },
//         { name: "Accessories", icon: "watch.png" }
//     ]
//     return (categories)
// }

export function getAppSettings() {
    return new Promise((resolve, reject) => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        fetch(apiServer + "/settings", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                // console.log(result);
                resolve(JSON.parse(result));
            })
            .catch((error) => console.error(error));
    });

}

export async function getCarousel() {
    const settings = await getAppSettings();
    if (settings && settings.carousel && settings.carousel.length > 0) {
        let carousel = settings.carousel.map(item => {
            return {
                endpoint: apiServer + item.endpoint,
                img: apiServer + "/images/" + item.img
            }
        });
        // console.log(carousel);
        return carousel;
    } else { return ([{ endpoint: "#", img: apiServer + "/images/" + "carou6.jpg" }]) }
}

export async function getCategories() {
    const settings = await getAppSettings();
    if (settings && settings.carousel && settings.carousel.length > 0) {
        let categories = settings.categories.map(item => {
            return {
                id: item.id,
                name: item.name,
                subCategories: item.subCategories,
                icon: apiServer + "/images/" + item.icon
            }
        });
        // console.log(carousel);
        return categories;
    } else { return ([{ name: "Accessories", icon: "watch.png" }]) }

}


export async function getProductCarousel() {
    const settings = await getAppSettings();
    if (settings && settings.productCarousel && settings.productCarousel.length > 0) {
        let productCarousel = settings.productCarousel;
        // console.log(productCarousel);
        return productCarousel;
    } else {
        return ([{ name: "Top Deals", products: ["1001", "1002", "1003"] }])
    }

}