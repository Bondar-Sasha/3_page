import React from 'react'

import styles from './styles.module.scss'
import Menu from '../../../../../data/header/Menu.png'
import AppLogo from '../../../../../data/header/Logo _ Black.png'
import SearchLogo from '../../../../../data/header/search.png'
import UserLogo from '../../../../../data/header/Userpic.png'
import OtherLogo_1 from '../../../../../data/header/phone-18.png'
import OtherLogo_2 from '../../../../../data/header/Combined Shape.png'
import NotificationLogo from '../../../notification/NotificationLogo'

// import AppLogo from '../../../logos/AppLogo'

const Desktop = () => {
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
                            <img src={OtherLogo_1} alt="" />
                        </div>
                        <div className={styles.header_icons_wrapper}>
                            <img src={OtherLogo_2} alt="" />
                        </div>
                        <NotificationLogo className={styles.header_icons_wrapper} />
                    </div>
                    <img className={styles.header_secondPart_wrapper_userIcon} alt="user logo" src={UserLogo} />
                </div>
            </div>
        </header>
    )
}

export default Desktop
