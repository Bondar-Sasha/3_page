import React from 'react'

import styles from './style.module.scss'
import Switch from '../switch/Switch'
import SmallVideo from '../small video/SmallVideo'

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <div className={styles.aside_header}>
                <span className={styles.aside_header_name}>Next</span>
                <div className={styles.aside_header_autoplayContainer}>
                    <span className={styles.aside_header_autoplayContainer_label}>autoplay</span>
                    <Switch />
                </div>
            </div>
            <SmallVideo />
            <SmallVideo />
            <SmallVideo />
            <SmallVideo />
            <SmallVideo />
            <SmallVideo />
            <SmallVideo />
            <SmallVideo />
        </aside>
    )
}

export default Aside
