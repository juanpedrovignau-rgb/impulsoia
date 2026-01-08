import React, { useEffect } from 'react';

const AdSlot = ({ adClient, adSlot, adFormat = 'auto', fullWidthResponsive = 'true', style = {} }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
        }
    }, []);

    return (
        <div className="ad-container" style={{ margin: '40px 0', textAlign: 'center', width: '100%', overflow: 'hidden', ...style }}>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>Espacio Publicitario</span>
            <ins className="adsbygoogle"
                style={{ display: 'block', ...style }}
                data-ad-client={adClient || 'ca-pub-2617860303557330'}
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={fullWidthResponsive}></ins>
        </div>
    );
};

export default AdSlot;
