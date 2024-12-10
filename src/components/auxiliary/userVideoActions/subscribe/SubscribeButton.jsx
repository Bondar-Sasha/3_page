import styles from './subscribeButton.module.css'

const SubscribeButton = ({ text = '2.3m' }) => {
    return (
        <button className={styles.button}>
            Subscribe <span>{text}</span>
        </button>
    )
}

export default SubscribeButton
