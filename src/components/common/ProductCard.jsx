import styles from '../../css/common/product_card.module.css'
import { Link } from 'react-router-dom'

const tpr = {
    "category": {
        "primary": 10,
        "sub": 101
    },
    "delivery": {
        "charges": 40,
        "time": 2
    },
    "pid": "HJ1001",
    "name": "Cool T-Shirt",
    "thumbnail": "http://10.234.6.118:3001/images/carou1.jpg",
    "title": "Comfort Cotton Tee",
    "disciption": "A premium cotton t-shirt for everyday wear.",
    "commonImages": [
        "http://10.234.6.118:3001/images/carou2.jpg",
        "http://10.234.6.118:3001/images/carou3.jpg"
    ],
    "colors": [
        {
            "cid": 1,
            "color": "Red",
            "images": [
                "http://10.234.6.118:3001/images/carou1.jpg",
                "http://10.234.6.118:3001/images/carou1.jpg"
            ],
            "variants": [
                {
                    "price": 499,
                    "mrp": 699,
                    "vid": 1,
                    "subVariants": [
                        {
                            "svid": 1,
                            "stock": 20,
                            "_id": "688601acf03f90ef7f48be2f"
                        },
                        {
                            "svid": 2,
                            "stock": 15,
                            "_id": "688601acf03f90ef7f48be30"
                        }
                    ],
                    "_id": "688601acf03f90ef7f48be2e"
                }
            ],
            "_id": "688601acf03f90ef7f48be2d"
        }
    ],
    "brand": "BrandX",
    "returnable": 1,
    "replaceable": 1,
    "reviews": [
        {
            "name": "Alice",
            "rating": 4,
            "review": "Great quality shirt!",
            "photos": [
                "https://example.com/rev1.jpg"
            ],
            "_id": "688601acf03f90ef7f48be31"
        }
    ],
    "__v": 0
}

function ProductCard({product,variant}) {
    let mrp = tpr.colors[0].variants[0].mrp
    let price = tpr.colors[0].variants[0].price
   
    return (
        <Link to={'/product/'+tpr.pid}>
            <div className={styles.product}>
                <img className={styles.image} src={tpr.thumbnail} />
                <p className={styles.title}>{tpr.title}</p>
                <span className={styles.color}>{tpr.colors[0].color}</span>
                <span className={styles.price}>₹{price}</span>
                <span className={styles.mrp}>₹{mrp}</span>
                <span className={styles.discount}>{Math.round(((mrp-price)/mrp)*100)}%</span>
            </div>
        </Link>
    )
}
export default ProductCard