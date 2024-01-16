export function getAccountSettings() {
    const accountSettings = [
        {
            title: "Account settings", links: [{ title: "Profile information", location: "/account/profile" },
            { title: "Manage Addresses", location: "/account/addresses" }], icon: "/account.svg"
        },

        {
            title: "Payments", links: [{ title: "Gift Cards", location: "/account/gift_cards" },
            { title: "Saved Cards", location: "/account/cards" }, { title: "Saved UPI", location: "/account/saved_vpa" }], icon: "/wallet.svg"
        },
        {
            title: "My Stuff", links: [{ title: "My coupons", location: "/account/my_coupons" },
            { title: "My Review & Ratings", location: "/account/my_reviews" }, { title: "My Wishlist", location: "/account/wishlist" },
            { title: "All Notifications", location: "/account/notifications" }], icon: "/mystuff.svg"
        },

    ]
    return (accountSettings)
}

export function getSavedAddresses() {
    const addressObj = {
        type: "home",
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