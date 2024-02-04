export function getFilters(){
    const obj = {
        "name": "BRAND",
        "list": [{ title: "Sparx", value: "Sparx" }, { title: "Puma", value: "Puma" }, { title: "Nike", value: "Nike" },
        { title: "Adidas", value: "Adidas" }, { title: "Woodland", value: "Woodland" }],
    }
    return([obj,obj,obj,obj,obj])
}

export function getSuggestions(){
    const obj = {
        icon: "/search.svg",
        title: "This is the main component the best and solid"
    }
    return([obj,obj,obj,obj,obj,obj])
}

export function getCartItems(){
    const cartObj = {
        pid:"JGTIO4",
        variant:[0,2]
    }
    return([cartObj,cartObj,cartObj,cartObj,cartObj,cartObj,cartObj])
}

export function getFooter() {
    const footer = [
        {
            title: "About", items: [
                { name: "Who we are", endpoint: "#" },
                { name: "Contact Us", endpoint: "#" },
                { name: "News Letter", endpoint: "#" }

            ]
        },
        {
            title: "Help", items: [
                { name: "Payment", endpoint: "#" },
                { name: "Shipping", endpoint: "#" },
                { name: "Cancellation and returns", endpoint: "#" },
                { name: "Faq", endpoint: "#" },
                { name: "Report infringment", endpoint: "#" }
            ]
        },
        {
            title: "Consumer policy", items: [
                { name: "Cancellation and returns", endpoint: "#" },
                { name: "Terms of use", endpoint: "#" },
                { name: "Security", endpoint: "#" },
                { name: "Privacy", endpoint: "#" },
                { name: "Sitemap", endpoint: "#" }
            ]
        }
    ];
    return footer;
}
export function performSearch(keyword){
    const obj  = {
        icon:"/search.svg",
        title:"This is the main component the best and solid"
    }
    return([obj,obj,obj,obj,obj,obj,obj])
}

export function getStates(){
    const indianStates = [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal',
        'Andaman and Nicobar Islands',
        'Chandigarh',
        'Dadra and Nagar Haveli and Daman and Diu',
        'Lakshadweep',
        'Delhi',
        'Puducherry'
      ];
      return(indianStates)
}
