import React from 'react'

import styles from './desktop.module.scss'
import Aside from '../../../aside/Aside'
import LikeAction from '../../../userVideoActions/like/LikeAction'
import DislikeAction from '../../../userVideoActions/dislike/DislikeAction'
import ShareAction from '../../../userVideoActions/share/ShareAction'
import MoreAction from '../../../userVideoActions/more/MoreAction'
import SubscribeButton from '../../../userVideoActions/subscribe/SubscribeButton'

const Desktop = () => {
    return (
        <>
            <Aside />
            <main className={styles.main}>
                <div className={styles.main_content}>
                    <div className={styles.main_content_video}>
                        <div className={styles.main_content_video_controllers}>
                            <div className={styles.main_content_video_controllers_time}>
                                <span>1:34</span>
                                <span>19:00</span>
                            </div>
                            <div className={styles.main_content_video_controllers_progress}></div>
                            <div className={styles.main_content_video_controllers_other}>
                                <div className={styles.main_content_video_controllers_other_stop}></div>
                                <div className={styles.main_content_video_controllers_other_picture}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.main_content_videoHeader}>
                        <span className={styles.main_content_videoHeader_name}>Dude You Re Getting A Telescope</span>
                        <div className={styles.main_content_actions}>
                            <span className={styles.main_content_actions_views}>123k views</span>
                            <div className={styles.main_content_actions_handlers}>
                                <LikeAction />
                                <DislikeAction />
                                <ShareAction />
                                <MoreAction />
                            </div>
                        </div>
                    </div>
                    <div className={styles.main_content_description}>
                        <div className={styles.main_content_description_data}>
                            <div className={styles.main_content_description_data_chanelLogo}></div>
                            <div>
                                <span>Food & Drink</span>
                                <span>Published on 14 Jun 2019</span>
                                <p>
                                    A successful marketing plan relies heavily on the pulling-power of advertising copy.
                                    Writing result-oriented ad copy is difficult, as it must appeal to, entice, and
                                    convince consumers to take action. There is no magic formula to write perfect ad
                                    copy; it is based on a number of factors, including ad placement, demographic, even
                                    the consumer’s mood when they see your ad.{' '}
                                </p>
                                <span>Show more</span>
                            </div>
                        </div>
                        <div className={styles.main_content_description_subscribe}>
                            <SubscribeButton />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Desktop
