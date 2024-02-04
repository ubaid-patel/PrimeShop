export function getAccountSettings() {
    const accountSettings = [
        {
            title: "ACCOUNT SETTINGS", links: [{ title: "Profile information", location: "/account/profile" },
            { title: "Manage Addresses", location: "/account/addresses" }], icon: "/account.svg"
        },

        {
            title: "PAYMENTS", links: [{ title: "Gift Cards", location: "/account/gift_cards" },
            { title: "Saved Cards", location: "/account/cards" }, { title: "Saved UPI", location: "/account/saved_vpa" }], icon: "/wallet.svg"
        },
        {
            title: "MY STUFF", links: [{ title: "My coupons", location: "/account/my_coupons" },
            { title: "My Review & Ratings", location: "/account/my_reviews" }, { title: "My Wishlist", location: "/account/wishlist" },
            { title: "All Notifications", location: "/account/notifications" }], icon: "/mystuff.svg"
        },

    ]
    return (accountSettings)
}

export function getSavedAddresses() {
    const addressObj = {
        id: "ADR01ID",
        type: "HOME",
        name: "Ubaid Patel",
        pincode: 585389,
        address: "New area Gola K",
        locality: "Gulbarga",
        city: "Shahabad",
        state: "Karnataka",
        landmark: "Beside Panchayat Office",
        mobile: ["9148749147", "9035035517"]
    }
    return ([addressObj, addressObj, addressObj, addressObj])
}

export function getAddresses() {
    const addressObj = {
        id: "ADR01ID",
        type: "HOME",
        name: "Ubaid Patel",
        pincode: 585389,
        address: "New area Gola K",
        locality: "Gulbarga",
        city: "Shahabad",
        state: "Karnataka",
        landmark: "Beside Panchayat Office",
        mobile: ["9148749147", "9035035517"]
    }
    return (addressObj)
}

function getOrders(){
    const order = {
        id:"ORDER_ID",
        product:"PRODUCT_ID",
        variant:"PRODUCT_VARIANT",
        address:"ADDRESS_ID"
    }
    const orders = []
}