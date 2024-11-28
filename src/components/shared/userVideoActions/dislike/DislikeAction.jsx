import styles from './dislikeAction.module.css'
import Icon from './Combined-Shape.png'

const DislikeAction = ({ text = '435k' }) => {
    return (
        <button className={styles.button}>
            <img src={Icon} alt="dislike icon" />
            <span>{text}</span>
        </button>
    )
}

export default DislikeAction
