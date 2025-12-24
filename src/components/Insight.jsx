import React from 'react';

export default function Insight() {
    return (
        <section className="section-padding" style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center'
        }}>
            <div className="container">
                <h2 className="section-title-large" style={{
                    fontWeight: '800',
                    color: '#fff',
                    lineHeight: '1.2',
                    maxWidth: '900px',
                    margin: '0 auto',
                    letterSpacing: '-1px'
                }}>
                    "En 2026, el <span style={{ color: 'var(--accent-color)', fontWeight: '900', textShadow: '0 0 20px var(--accent-glow)' }}>85%</span> de las interacciones cliente-empresa serán <span style={{ color: 'var(--accent-color)', fontWeight: '900', textShadow: '0 0 20px var(--accent-glow)' }}>sin humanos</span> y automatizadas"
                </h2>
                <div style={{
                    width: '60px',
                    height: '4px',
                    background: 'var(--accent-yellow)',
                    margin: '35px auto',
                    borderRadius: '2px'
                }}></div>
                <p style={{
                    color: 'var(--accent-yellow)',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    fontSize: '0.85rem',
                    fontWeight: '700'
                }}>
                    Lidera el cambio. No te quedes atrás.
                </p>
            </div>
        </section>
    );
}
