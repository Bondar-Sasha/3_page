import { useRef } from 'react'

import styles from './styles.module.scss'
import SoundProgress from '../progress/sound/SoundProgress'
import VideoProgress from '../progress/video/VideoProgress'

import PauseIcon from './img/Pause.png'
import VolumeIcon from './img/Volume.png'
import NextVideoIcon from './img/Next.png'
import SubtitlesIcon from './img/Subtitles.png'
import FullScreenIcon from './img/Full Screen.png'
import SettingsIcon from './img/Settings.png'
import SizeVideoIcon from './img/Size.png'

const VideoControllers = () => {
    const ref = useRef(null)

    return (
        <div ref={ref} className={styles.wrapper}>
            <div className={styles.controllers}>
                <div className={styles.controllers_time}>
                    <img className={styles.controllers_time_stopIcon} src={PauseIcon} alt="PauseIcon" />
                    <span>1:34</span>
                    <span>19:00</span>
                </div>
                <div className={styles.controllers_progress}>
                    <VideoProgress value={22} />{' '}
                </div>
                <div className={styles.controllers_other}>
                    <div className={styles.controllers_other_stop}>
                        <span className={styles.controllers_other_stop_time}>-10:00</span>
                        <img src={PauseIcon} alt="PauseIcon" />
                        <img src={NextVideoIcon} alt="NextVideoIcon" />
                        <img src={VolumeIcon} alt="VolumeIcon" />
                        <SoundProgress value={40} />
                    </div>
                    <div className={styles.controllers_other_picture}>
                        <img src={SubtitlesIcon} alt="SubtitlesIcon" />
                        <img src={SettingsIcon} alt="SettingsIcon" />
                        <img src={SizeVideoIcon} alt="SizeVideoIcon" />
                        <img src={FullScreenIcon} alt="FullScreenIcon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoControllers
