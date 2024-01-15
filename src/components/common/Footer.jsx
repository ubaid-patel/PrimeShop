import getFooter from '../../api-calls/getFooter'
import styles from '../../css/common/footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
    const sections = getFooter();
    return (
        <footer className={styles.footer}>
            {
                sections.map((section) => {
                    return (
                        <div className={styles.section}>
                            <h3 className={styles.title}>{section.title}</h3>
                            {section.items.map((item) => {
                                return <Link to={item.endpoint}>
                                    <span className={styles.item}>
                                        {item.name}
                                    </span>
                                </Link>
                            })}
                        </div>
                    )
                })
            }
        </footer>
    )
}
export default Footer