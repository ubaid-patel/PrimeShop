function getProducts(){
    const productDetails = {
        pid:"AH89P",
        title:"The Best Shoes",
        disciption:"",
        price:999,
        mrp:3999,
        colors:[
            {name:"Green",pics:["google.com/img12"]},
            {name:"Red",pics:["google.com/img12"]}
        ],
        sizes:[7,"M",],
        delivery:0,
    }
    const allProducts = [productDetails,productDetails,productDetails,productDetails,productDetails,productDetails];
    return allProducts;
}

export default getProducts;