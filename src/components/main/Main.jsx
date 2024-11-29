import SubscribeButton from '../auxiliary/userVideoActions/subscribe/SubscribeButton'
import styles from './style.module.scss'

import LikeAction from '../auxiliary/userVideoActions/like/LikeAction'
import DislikeAction from '../auxiliary/userVideoActions/dislike/DislikeAction'
import ShareAction from '../auxiliary/userVideoActions/share/ShareAction'
import MoreAction from '../auxiliary/userVideoActions/more/MoreAction'
import VideoProgress from '../auxiliary/progress/video/VideoProgress'
import SoundProgress from '../auxiliary/progress/sound/SoundProgress'

import PauseIcon from './img/Pause.png'
import VolumeIcon from './img/Volume.png'
import NextVideoIcon from './img/Next.png'
import SubtitlesIcon from './img/Subtitles.png'
import FullScreenIcon from './img/Full Screen.png'
import SettingsIcon from './img/Settings.png'
import SizeVideoIcon from './img/Size.png'
import ChanelLogo from './img/Oval.png'

const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main_content}>
                <div className={styles.main_content_video}>
                    <div className={styles.main_content_video_controllers}>
                        <div className={styles.main_content_video_controllers_time}>
                            <span>1:34</span>
                            <span>19:00</span>
                        </div>
                        <div className={styles.main_content_video_controllers_progress}>
                            <VideoProgress value={22} />{' '}
                        </div>
                        <div className={styles.main_content_video_controllers_other}>
                            <div className={styles.main_content_video_controllers_other_stop}>
                                <img src={PauseIcon} alt="PauseIcon" />
                                <img src={NextVideoIcon} alt="NextVideoIcon" />
                                <img src={VolumeIcon} alt="VolumeIcon" />
                                <SoundProgress value={40} />
                            </div>
                            <div className={styles.main_content_video_controllers_other_picture}>
                                <img src={SubtitlesIcon} alt="SubtitlesIcon" />
                                <img src={SettingsIcon} alt="SettingsIcon" />
                                <img src={SizeVideoIcon} alt="SizeVideoIcon" />
                                <img src={FullScreenIcon} alt="FullScreenIcon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.main_content_videoHeader}>
                    <span className={styles.main_content_videoHeader_name}>Dude You Re Getting A Telescope</span>
                    <div className={styles.main_content_videoHeader_actions}>
                        <span className={styles.main_content_videoHeader_actions_views}>123k views</span>
                        <div className={styles.main_content_videoHeader_actions_handlers}>
                            <LikeAction />
                            <DislikeAction />
                            <ShareAction />
                            <MoreAction />
                        </div>
                    </div>
                </div>
                <div className={styles.main_content_description}>
                    <div className={styles.main_content_description_data}>
                        <div className={styles.main_content_description_data_chanelLogo}>
                            <img src={ChanelLogo} alt="ChanelLogo" />
                        </div>
                        <div className={styles.main_content_description_data_content}>
                            <span className={styles.main_content_description_data_content_name}>Food & Drink</span>
                            <span className={styles.main_content_description_data_content_publishedDate}>
                                Published on 14 Jun 2019
                            </span>
                            <p className={styles.main_content_description_data_content_text}>
                                A successful marketing plan relies heavily on the pulling-power of advertising copy.
                                Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince
                                consumers to take action. There is no magic formula to write perfect ad copy; it is
                                based on a number of factors, including ad placement, demographic, even the consumer’s
                                mood when they see your ad.{' '}
                            </p>
                            <span className={styles.main_content_description_data_content_more}>Show more</span>
                        </div>
                    </div>
                    <div className={styles.main_content_description_subscribe}>
                        <SubscribeButton />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
