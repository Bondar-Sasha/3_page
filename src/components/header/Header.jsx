import styles from './styles.module.scss'
import Menu from './img/Menu.svg'
import AppLogo from './img/new-youtube-logo.svg'
import SearchLogo from './img/search.svg'
import UserLogo from './img/Userpic.svg'
import OtherLogo_1 from './img/phone-18.svg'
import OtherLogo_2 from './img/Combined Shape.svg'
import NotificationLogo from '../auxiliary/notification/NotificationLogo'
import DotsLogo from './img/dots.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_firstPart}>
                <div className={styles.header_icons_wrapper}>
                    <img className={styles.header_firstPart_menu} alt="Header menu logo" src={Menu} />
                </div>
                <img className={styles.header_firstPart_appLogo} src={AppLogo} alt="App logo" />
            </div>

            <div className={styles.header_secondPart}>
                <div className={styles.search_container}>
                    <input className={styles.search_container_field} type="text" placeholder="Search" />
                    <img className={styles.search_container_logo} src={SearchLogo} alt="search_field" />
                </div>
                <div className={styles.header_secondPart_wrapper}>
                    <div className={styles.header_secondPart_wrapper_otherLogos}>
                        <div className={styles.header_icons_wrapper}>
                            <img src={OtherLogo_1} alt="OtherLogo_1" />
                        </div>
                        <div className={styles.header_icons_wrapper}>
                            <img src={OtherLogo_2} alt="OtherLogo_2" />
                        </div>
                        <NotificationLogo className={styles.header_icons_wrapper} />
                    </div>
                    <img className={styles.header_secondPart_wrapper_userIcon} alt="user logo" src={UserLogo} />
                    <img className={styles.header_secondPart_wrapper_dotsIcon} alt="DotsLogo" src={DotsLogo} />
                </div>
            </div>
        </header>
    )
}

export default Header
