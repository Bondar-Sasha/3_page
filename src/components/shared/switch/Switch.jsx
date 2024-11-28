import React from 'react'
import styles from './switch.module.scss'

const Switch = () => {
    return (
        <div class={styles.toggle_container}>
            <input type="checkbox" id="toggle" class={styles.toggle_checkbox} />
            <label for="toggle" class={styles.toggle_label}>
                <span class={styles.toggle_switch}></span>
            </label>
        </div>
    )
}

export default Switch
