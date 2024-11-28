import styles from './moreAction.module.css'
import Icon from './More.png'

const MoreAction = ({ text = '' }) => {
    return (
        <button className={styles.button}>
            <img src={Icon} alt="more icon" />
        </button>
    )
}

export default MoreAction
