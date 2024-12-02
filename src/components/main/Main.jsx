import SubscribeButton from '../auxiliary/userVideoActions/subscribe/SubscribeButton'
import styles from './style.module.scss'

import LikeAction from '../auxiliary/userVideoActions/like/LikeAction'
import DislikeAction from '../auxiliary/userVideoActions/dislike/DislikeAction'
import ShareAction from '../auxiliary/userVideoActions/share/ShareAction'
import MoreAction from '../auxiliary/userVideoActions/more/MoreAction'
import ChanelLogo from './img/Oval.png'
import ArrowLogo from './img/Right Arrow.svg'
import VideoControllers from '../auxiliary/videoControllers/VideoControllers'

const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main_video}>
                <VideoControllers />
            </div>
            <div className={styles.main_videoHeader}>
                <span className={styles.main_videoHeader_name}>
                    <span>Dude You Re Getting A Telescope</span>
                    <span className={styles.main_videoHeader_name_arrow}>
                        <img src={ArrowLogo} alt="ArrowLogo" />
                    </span>
                </span>
                <div className={styles.main_videoHeader_actions}>
                    <span className={styles.main_videoHeader_actions_views}>123k views</span>
                    <div className={styles.main_videoHeader_actions_handlers}>
                        <LikeAction />
                        <DislikeAction />
                        <ShareAction />
                        <MoreAction />
                    </div>
                </div>
            </div>
            <div className={styles.main_description}>
                <div className={styles.main_description_data}>
                    <div className={styles.main_description_data_chanelLogo}>
                        <img src={ChanelLogo} alt="ChanelLogo" />
                    </div>
                    <div className={styles.main_description_data_content}>
                        <span className={styles.main_description_data_content_name}>Food & Drink</span>
                        <span className={styles.main_description_data_content_subs}>245K subscribed</span>
                        <span className={styles.main_description_data_content_publishedDate}>
                            Published on 14 Jun 2019
                        </span>
                        <p className={styles.main_description_data_content_text}>
                            A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing
                            result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers
                            to take action. There is no magic formula to write perfect ad copy; it is based on a number
                            of factors, including ad placement, demographic, even the consumer’s mood when they see your
                            ad.{' '}
                        </p>
                        <span className={styles.main_description_data_content_more}>Show more</span>
                    </div>
                </div>
                <div className={styles.main_description_subscribe}>
                    <SubscribeButton />
                </div>
            </div>
        </main>
    )
}

export default Main
