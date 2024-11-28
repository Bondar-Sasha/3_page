import React from 'react'

import styles from './smallVideo.scss'
import VideoPicture from './data/Cover.png'

const SmallVideo = () => {
    return (
        <div className={styles.small_video_wrapper}>
            <div className={styles.small_video}>
                <div className={styles.small_video_previewContainer}>
                    <img
                        className={styles.small_video_previewContainer_wallpaper}
                        src={VideoPicture}
                        alt="Next video"
                    />
                    <div className={styles.small_video_previewContainer_timeContainer}>
                        <span className={styles.small_video_previewContainer_timeContainer_time}>4:31</span>
                    </div>
                </div>
                <div className={styles.small_video_information}>
                    <span className={styles.small_video_information_videoName}>A Brief History Of Creation</span>
                    <div className={styles.small_video_information_metricsContainer}>
                        <span className={styles.small_video_information_metricsContainer_views}>
                            80k views&nbsp;&nbsp;·&nbsp;&nbsp;3 days ago
                        </span>
                        <span className={styles.small_video_information_metricsContainer_author}>Dollie Blair</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallVideo
