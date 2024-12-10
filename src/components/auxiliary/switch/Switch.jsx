import React from 'react'
import styles from './switch.module.scss'

const Switch = () => {
    return (
        <div className={styles.toggle_container}>
            <input type="checkbox" id="toggle" className={styles.toggle_checkbox} />
            <label htmlFor="toggle" className={styles.toggle_label}>
                <span className={styles.toggle_switch}></span>
            </label>
        </div>
    )
}

export default Switch
