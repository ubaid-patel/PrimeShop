import { useState } from 'react'
import styles from '../css/components/product_Info.module.css'
function ProductInfo() {
    const details = {
        title: "Action Athleo ATG-496 Men's Mesh Breathable Lightweight Comfort Walking Gym Outdoor Trendy Running Shoe",
        ratings: { star: 5, reviews: 56 },
        colors: [{ name: "Yellow", pics: ["/carou1.jpg", "/carou1.jpg"] }, { "name": "Green", pics: ["/carou1.jpg", "/carou1.jpg"] }],
        sizes: [0, 1, 2, 3],
        discription: "Comfort Sole & Flexible Walk: EVA (Ethylene Vinyl Acetate) sole for better flexibility & bounce during movement, doubling the Effect of shock absorption. This shoe is slip resistant and provides excellent comfort and durability. An excellent choice for daily wear footwear.    Style & Technology: Great engineering strikes a balance in style, made in the potent design and latest fashion trends. Made for long-term wear, with extra emphasis on providing cushion to the feet, removing heel strain.    Lightweight & Breathable: Exclusive design and durable materials every step feels light and breezy. Breathable, free-moving fabrics which adjust according to your foot and create an astoundingly easy-going experience.     Care Instructions: Allow your pair of shoes to air and de-odorize at regular basis and use shoe bags to prevent any stains or mildew.",
        mrp: 2000,
        price: 1000
    }
    const [activeColor, setActiveColor] = useState("Navy")
    const [activeSize, setActiveSize] = useState(0)
    return (
        <div className={styles.info}>
            <h2 className={styles.title}>{details.title}</h2>
            <div className={styles.ratings}>
                {details.ratings.star}
                {Array.from({ length: 5 }, () => <img src={'/star.svg'} className={styles.star} />)}
                {details.ratings.reviews} Reviews
            </div>
            <h2 className={styles.discount}>-{(((details.mrp - details.price) / details.mrp) * 100)}%</h2>
            <h2 className={styles.price}>₹{details.price}</h2>
            <span className={styles.mrp}>M.R.P: <span className={styles.mrp_span}>₹{details.mrp}</span></span>

            <div className={styles.color_heading}>
                Colour:<span className={styles.active_color}>
                    {activeColor}
                </span>
            </div>
            <div className={styles.colors}>
                {
                    details.colors.map((color) => {
                        return (
                            <div className={styles.color_icon} onClick={() => setActiveColor(color.name)}>
                                <img src={color.pics[0]} />
                            </div>)
                    })
                }
            </div>
            <div className={styles.size_heading}>
                Size: <span className={styles.active_size}>
                    {activeSize} IN
                </span>
            </div>
            <div className={styles.sizes}>
                {
                    details.sizes.map((size) => {
                        return (
                            <div className={styles.size} onClick={()=>setActiveSize(size)}>{size} IN</div>
                        )
                    })
                }
            </div>
            <div className={styles.productDetails}>
                {details.discription}
            </div>

        </div>
    )
}
export default ProductInfo
