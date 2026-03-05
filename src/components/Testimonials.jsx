import React from 'react';
import { businessConfig } from '../config';

export default function Testimonials({ isInternal = false }) {
    const testimonials = businessConfig.testimonials || [];

    if (testimonials.length === 0) return null;

    return (
        <div className={`testimonials-container ${isInternal ? 'internal' : ''}`} style={{ marginTop: '80px', marginBottom: '80px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <span className="section-title-small" style={{ letterSpacing: '2px' }}>Testimonios</span>
                <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff', marginTop: '10px' }}>Casos de Éxito</h3>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '25px'
            }}>
                {testimonials.map((t, i) => (
                    <div key={i} className="glass-card" style={{
                        padding: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: '10px', right: '20px', fontSize: '4rem', opacity: 0.1, color: 'var(--accent-color)', fontFamily: 'serif' }}>"</div>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', position: 'relative', zIndex: 1 }}>
                            {t.content}
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: 'auto' }}>
                            <img src={t.avatar} alt={t.name} loading="lazy" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-color)' }} />
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700' }}>{t.name}</h4>
                                <p style={{ color: 'var(--accent-color)', fontSize: '0.8rem', fontWeight: '500', textTransform: 'uppercase' }}>{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
