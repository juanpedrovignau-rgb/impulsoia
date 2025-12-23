import React from 'react';
import { businessConfig } from '../config';

export default function Metrics() {
    return (
        <section id="metrics" style={{
            position: 'relative',
            padding: '120px 0',
            backgroundColor: '#000',
            overflow: 'hidden',
            textAlign: 'center'
        }}>
            {/* Unified Video Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                backgroundColor: '#000'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    zIndex: 2
                }}></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 1
                    }}
                >
                    <source src="/chatbot-whatsapp.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                <span className="section-title-small">Impacto Medible</span>
                <h2 className="section-title-large">Resultados Basados en Datos</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '30px',
                    marginTop: '60px'
                }}>
                    {businessConfig.metrics.stats && businessConfig.metrics.stats.map((metric, index) => (
                        <div key={index} className="glass-card" style={{ padding: '40px 20px', borderBottom: '2px solid rgba(0, 206, 209, 0.2)' }}>
                            <div style={{
                                fontSize: '3.5rem',
                                fontWeight: '900',
                                color: 'var(--accent-color)',
                                marginBottom: '10px',
                                textShadow: '0 0 20px var(--accent-glow)'
                            }}>
                                {metric.number}
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                color: 'var(--accent-yellow)',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                fontWeight: '700'
                            }}>
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
