import styles from './index.module.css'

const SoundProgress = ({ value = 10 }) => {
    return <progress className={styles.progress} value={value} max="100"></progress>
}

export default SoundProgress
