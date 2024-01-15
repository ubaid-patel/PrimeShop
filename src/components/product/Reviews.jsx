import styles from '../../css/components/product/reviews.module.css'

function getWeightedAverage(array) {
    let multi = array.reduce((prev, curr, index) => prev + (curr * (index + 1)));
    let average = array.reduce((prev, curr) => prev + curr)
    let wAverage = multi / average
    return wAverage;
}
function getStarPerc(summary) {
    const perc = [];
    const total = summary.reduce((prev, curr) => prev + curr);

    summary.forEach((value) => {
        perc.push((value / total) * 100)
    })
    return (perc)
}
function Reviews() {
    const obj = {
        name: "Ubaid Patel",
        photo: null,
        title: "Very Nice Product",
        date: "20 December 2023",
        description: "Best Quality ant Very Affordable Rates",
        rating: 5

    }
    const summary = {
        rating: [0, 0, 0, 0, 2],
    }
    const details = [obj, obj, obj, obj, obj, obj, obj, obj]
    return (
        <div className={styles.reviews}>
            <div className={styles.summary}>
                <div className={styles.wtAverage}>
                    {Array.from({ length: details.reduce((a, b) => a + b) }, () => <img src={"star.svg"} />)}
                    <span className={styles.average_rating}>{getWeightedAverage(summary.rating)} Out of 5</span>
                    <span>{summary.rating.reduce((prev, curr) => prev + curr)} Global Ratings</span>
                    <div className={styles.rating_perc}>
                        {getStarPerc(summary.rating).map(
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
                    details.map((review) =>
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