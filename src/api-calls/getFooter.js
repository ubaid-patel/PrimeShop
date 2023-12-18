function getFooter() {
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

export default getFooter;