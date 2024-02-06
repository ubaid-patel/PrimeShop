import styles from '../../css/components/product/reviews.module.css'
import { getRatings, getReviews } from '../../services/productService';

function Reviews() {
    const rating = getRatings();
    const reviews = getReviews();
    return (
        <div className={styles.reviews}>
            <div className={styles.summary}>
                <h2>Customer reviews</h2>
                <div className={styles.wtAverage}>
                    <div className={styles.rating_heading}>
                        {Array.from({ length: Math.round(rating.star) }, () => <img src={"/star.svg"} />)}
                        <span className={styles.average_rating}>{Math.round(rating.star)} Out of 5</span>
                    </div>
                    <span className={styles.global_ratings}>{rating.reviews} Global Ratings</span>
                    <div className={styles.rating_perc}>
                        {rating.starPrecent.reverse().map(
                            (value, index) => <div className={styles.star_perc}>
                                <span className={styles.star_numer}>{Math.abs(index - 5)} Star</span>
                                <div className={styles.percent_box}>
                                    <div className={styles.percent_fill} style={{ width: value + "%" }}></div>
                                </div>
                                <span className={styles.percent}>{value.toFixed(1)}</span>
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
                <div className={styles.review_content}>
                    <h1>Top reviews</h1>
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
                                <div className={styles.review_date}>Reviewed on {review.date}</div>
                                <div className={styles.verified}>Verified Purchase</div>
                                <div className={styles.review_disc}>{review.description}</div>
                                <button className={styles.helpful}>Helpfull</button>
                                <button className={styles.report}>Report</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Reviews