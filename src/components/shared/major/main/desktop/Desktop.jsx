import React from 'react'

import styles from './desktop.module.scss'
import Aside from '../../../aside/Aside'

const Desktop = () => {
    return (
        <>
            <Aside />
            <main className={styles.main}>
                <div className={styles.main_content}></div>
            </main>
        </>
    )
}

export default Desktop
