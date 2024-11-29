import styles from './style.module.scss'
import HomeIcon from './img/Home.svg'
import TrendingIcon from './img/Trending.svg'
import SubsIcon from './img/Subs.svg'
import LibraryIcon from './img/Library.svg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_container_icon}>
                    <img src={HomeIcon} alt="HomeIcon" />
                    <span>Home</span>
                </div>
                <div className={styles.footer_container_icon}>
                    <img src={TrendingIcon} alt="TrendingIcon" />
                    <span>Trending</span>
                </div>
                <div className={styles.footer_container_icon}>
                    <img src={SubsIcon} alt="SubsIcon" />
                    <span>Subscriptions</span>
                </div>
                <div className={styles.footer_container_icon}>
                    <img src={LibraryIcon} alt="LibraryIcon" />
                    <span>Library</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
