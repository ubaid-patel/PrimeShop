import styles from '../../css/components/product/reviews.module.css'
import { getRatings, getReviews } from '../../services/productService';

function Reviews() {
    const rating = getRatings();
    const reviews = getReviews();
    return (
        <div className={styles.reviews}>
            <div className={styles.summary}>
                <div className={styles.wtAverage}>
                    {Array.from({length:Math.floor(rating.star)}, () => <img src={"/star.svg"} />)}
                    <span className={styles.average_rating}>{rating.star} Out of 5</span>
                    <span>{rating.reviews} Global Ratings</span>
                    <div className={styles.rating_perc}>
                        {rating.starPrecent.map(
                            (value, index) => <div className={styles.star_perc}>
                                <span className={styles.star_numer}>{index + 1} Star</span>
                                <div className={styles.percent_box}>
                                    <div className={styles.percent_fill} style={{ width: value + "%" }}></div>
                                </div>
                                <span className={styles.percent}>{value}</span>
                            </div>)}
                    </div>
                </div>
                <div className={styles.get_review}>
                    <h3>Review this product</h3>
                    <span>Share your thoughts with other customers</span>
                    <button>Write Product Review</button>
                </div>
            </div>
            <div className={styles.top_reviews}>
                <h1>Customer Reviews</h1>
                {
                    reviews.map((review) =>
                        <div className={styles.review}>
                            <div className={styles.profile}>
                                <img src={review.photo ? review.photo : "/account_circle.jpg"} />
                                <span>{review.name}</span>
                            </div>
                            <div className={styles.rating}>
                                {Array.from({ length: review.rating }, () => <img src={"/star.svg"} />)}
                                <h2>{review.title}</h2>
                            </div>
                            <span className={styles.review_date}>Reviewed on {review.date}</span>
                            <span>Verified Purchase</span>
                            <span className={styles.review_disc}>{review.description}</span>
                            <button className={styles.helpful}>Helpfull</button>
                            <button className={styles.report}>Report</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Reviews