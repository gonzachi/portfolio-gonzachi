"use client";

import styles from './FigmaVideoPlayer.module.css';

interface FigmaVideoPlayerProps {
    src: string;
}

export default function FigmaVideoPlayer({ src }: FigmaVideoPlayerProps) {
    return (
        <div className={styles.container}>
            <div className={styles.videoWrapper}>
                <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    controls
                    playsInline
                    className={styles.video}
                />
            </div>
        </div>
    );
}
