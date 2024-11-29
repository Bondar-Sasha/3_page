import styles from './shareAction.module.css'
import Icon from './Fill 62.png'

const ShareAction = () => {
    return (
        <button className={styles.button}>
            <img src={Icon} alt="share icon" />
            <span>Share</span>
        </button>
    )
}

export default ShareAction
