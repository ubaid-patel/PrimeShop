const productDetails = {
    pid:"AH89P",
    title:"SuperRep Go Training & Gym Shoes For Men",
    disciption:"",
    price:990,
    mrp:1990,
    colors:[
        {name:"Green",pics:["carou1.jpg"]},
        {name:"Red",pics:["carou1.jpg"]}
    ],
    sizes:[7,"M",],
    delivery:0,
}
const allProducts = [productDetails,productDetails,productDetails,productDetails,productDetails,productDetails,productDetails,productDetails]
function getRecomendations(type, data) {
    switch (type.toLowerCase()) {
        case "featured":

            break;
        case "deals":

            break;
        case "new":

            break;
        case "similar":

            break;

        default:
            break;
    }
    return allProducts;
}

function getFeatured() {

}

function getDeals() {

}

function getNewArrival() {

}

function getSimilar() {

}

export default getRecomendations