import styles from './likeAction.module.css'
import Icon from './Combined-Shape.png'

const LikeAction = ({ text = '123k' }) => {
    return (
        <button className={styles.button}>
            <img src={Icon} alt="like icon" />
            <span>{text}</span>
        </button>
    )
}

export default LikeAction
