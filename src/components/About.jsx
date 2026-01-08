import { businessConfig } from '../config';
import React from 'react';

export default function About() {
    return (
        <section id="about" className="section-padding" style={{ backgroundColor: '#000', overflow: 'hidden' }}>
            <div className="container grid-2-cols" style={{ alignItems: 'center' }}>
                <div className="text-md-center" style={{ textAlign: 'left' }}>
                    <span className="section-title-small">Sobre Nosotros</span>
                    <h2 className="section-title-large">{businessConfig.about.title}</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px', fontWeight: '300', lineHeight: '1.8' }}>
                        {businessConfig.about.description}
                    </p>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'inherit' }}>
                        <div style={{ background: 'var(--accent-soft)', padding: '15px 20px', borderRadius: '12px', border: '1px solid rgba(0, 206, 209, 0.1)' }}>
                            <h4 style={{ color: 'var(--accent-color)', fontSize: '1.5rem', fontWeight: '900' }}>10+</h4>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Años Exp.</p>
                        </div>
                        <div style={{ background: 'var(--accent-soft)', padding: '15px 20px', borderRadius: '12px', border: '1px solid rgba(0, 206, 209, 0.1)' }}>
                            <h4 style={{ color: 'var(--accent-yellow)', fontSize: '1.5rem', fontWeight: '900' }}>50+</h4>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Proyectos</p>
                        </div>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '30px', margin: '0 auto', width: '100%', maxWidth: '100%', position: 'relative' }}>
                    <div style={{
                        borderRadius: '24px',
                        width: '100%',
                        maxWidth: '500px',
                        overflow: 'hidden',
                        backgroundColor: '#000',
                        boxShadow: '0 0 50px rgba(0, 206, 209, 0.15)',
                        border: '1px solid rgba(0, 206, 209, 0.2)'
                    }}>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{ width: '100%', display: 'block' }}
                        >
                            <source src="/chatbot-whatsapp.mp4" type="video/mp4" />
                        </video>
                    </div>
                    {/* Floating badge */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-10px',
                        right: '-10px',
                        background: 'var(--accent-yellow)',
                        color: '#000',
                        padding: '12px 20px',
                        borderRadius: '50px',
                        fontWeight: '900',
                        fontSize: '0.75rem',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                        textTransform: 'uppercase',
                        zIndex: 10
                    }}>
                        IA en Tiempo Real
                    </div>
                </div>
            </div>
        </section>
    );
}
