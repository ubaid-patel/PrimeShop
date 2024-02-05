export function getProduct(pid){
    const productObj = {
        pid: "AH89P",
        title: "SuperRep Go Training & Gym Shoes For Men",
        disciption: "In a world where speed is king, the Samsung Galaxy S21 FE reigns supreme, offering a seamless blend of power, storage, and style that's sure to delight even the most demanding smartphone aficionados. With its lightning-fast processor, spacious storage, stunning camera capabilities, and long-lasting battery, it's a device that elevates every aspect of your mobile experience. Say hello to a world where fast doesn't just get faster; it gets phenomenal.",
        variants:[
            {type:"Color",options:[
                {name:"Voite",imgSet:0,stock:90,price:888,mrp:999},
                {name:"Blue",imgSet:1,stock:90,price:888,mrp:999},
                {name:"Red",imgSet:2,stock:90,price:888,mrp:999}
            ]},
            {type:"Sizes",options:[
                {name:"7 IND",imgSet:0,stock:90,price:888,mrp:999},
                {name:"8 IND",imgSet:0,stock:90,price:888,mrp:999},
                {name:"8 IND",imgSet:0,stock:90,price:888,mrp:999},
                {name:"8 IND",imgSet:0,stock:90,price:888,mrp:999},
                
            ]},
        ],
        delivery: {charges:null,time:5,validity:19}, 
        images:[
            ["/carou1.jpg","/carou2.jpg","/carou3.jpg"],
            ["/carou3.jpg","/carou2.jpg","/carou1.jpg"],
            ["/carou2.jpg","/carou1.jpg","/carou3.jpg"]
        ]
    }
    return(productObj)
}

export function getAllProducts(category) {
    return([getProduct(),getProduct(),getProduct(),getProduct(),getProduct(),getProduct(),getProduct()])
}



export function getReviews(pid){
    const reviewObj = {
        name: "Ubaid Patel",
        photo: null,
        title: "Very Nice Product",
        date: "20 December 2023",
        description: "Best Quality ant Very Affordable Rates",
        rating:3
    }
    return([reviewObj,reviewObj,reviewObj,reviewObj])
}
export function getRatings(pid){
    let ratings = [12,245,34,45,89];
    //Calculating weighted average
    let multi = ratings.reduce((prev, curr, index) => prev + (curr * (index + 1)));
    let sum = ratings.reduce((prev, curr) => prev + curr)
    let wAverage = multi / sum

    //Calculating rating percent of each star
    const starPrec = [];
    ratings.forEach((value) => {
        starPrec.push((value / sum) * 100)
    })
    return({star:wAverage,reviews:sum,starPrecent:starPrec})
}

export function getRecomendations(){
    let result = getAllProducts();
    return(result)
}

export function normalizeProduct(input,variant){
    const output  = {
        pid:input.pid,
        title:input.title,
        description:input.disciption,
        price:input.variants[variant[0]].options[variant[1]].price,
        mrp:input.variants[variant[0]].options[variant[1]].mrp,
        varName:input.variants[variant[0]].options[variant[1]].name,
        images:input.images[input.variants[variant[0]].options[variant[1]].imgSet],
        stock:input.variants[variant[0]].options[variant[1]].stock,
        delivery:input.delivery,
        variants:input.variants
    };
    return(output)
}