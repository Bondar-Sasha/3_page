import styles from './notificationLogo.module.css'
import Logo from './data/ui-11.png'

const NotificationLogo = ({ className = '' }) => {
    const preperedClasses = [styles.notificationLogo, className].join(' ')
    return (
        <div data-count="3" className={preperedClasses}>
            <img src={Logo} alt="" />
        </div>
    )
}

export default NotificationLogo
