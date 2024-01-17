export function getProduct(pid){
    const productObj = {
        pid: "AH89P",
        title: "SuperRep Go Training & Gym Shoes For Men",
        disciption: "",
        price: 990,
        mrp: 1990,
        variants:[
            {type:"Color",options:[
                {name:"Voite",imgSet:0},
                {name:"Blue",imgSet:1},
                {name:"Red",imgSet:2}
            ]},
            {type:"Sizes",options:[
                {name:"7 IN",imgSet:0},
                {name:"8 IN",imgSet:0},
                {name:"8 IN",imgSet:0}
            ]},
        ],
        delivery: 6, 
        images:[
            ["carou1.jpg","carou2.jpg","carou3.jpg"],
            ["carou3.jpg","carou2.jpg","carou1.jpg"],
            ["carou2.jpg","carou1.jpg","carou3.jpg"]
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
        rating:[12,0,13,78,89]
    }
    return(reviewObj)
}

export function getRecomendations(){
    let result = getAllProducts();
    return(result)
}