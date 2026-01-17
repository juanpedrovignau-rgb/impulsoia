import React from 'react';
import { businessConfig } from '../config';

const VideoBackground = ({ overlayOpacity = 0.8, height = '100%' }) => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: height,
            zIndex: 1,
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: `rgba(0,0,0,${overlayOpacity})`,
                zIndex: 2
            }}></div>

            {businessConfig.hero.video ? (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={businessConfig.hero.image}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1
                    }}
                >
                    <source src={businessConfig.hero.video} type="video/mp4" />
                    <img
                        src={businessConfig.hero.image}
                        alt="Background"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </video>
            ) : (
                <img
                    src={businessConfig.hero.image}
                    alt="Background"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 1
                    }}
                />
            )}
        </div>
    );
};

export default VideoBackground;
