import React from 'react';
import { businessConfig } from '../config';
import { ConsultingIcon, AutomationIcon, ChatbotIcon, WebsiteIcon } from './ServiceIcons';

export default function Solutions() {
    const iconComponents = {
        "Consultoría Estratégica": ConsultingIcon,
        "Automatización de Procesos": AutomationIcon,
        "Desarrollo de Chatbots": ChatbotIcon,
        "Creación de websites automatizados": WebsiteIcon
    };

    const specializedServices = businessConfig.services.slice(3);

    return (
        <section id="solutions" className="section-padding" style={{ background: 'linear-gradient(to bottom, #0a0a0a, #121212)', padding: '100px 0' }}>
            <div className="container">
                <div style={{ marginBottom: '60px', textAlign: 'left', borderLeft: '4px solid var(--accent-color)', paddingLeft: '30px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '15px' }}>Ecosistema de Innovación</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', fontWeight: '300' }}>
                        Soluciones verticales de alta especialización para transformar cada área de tu organización.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {specializedServices.map((s, i) => {
                        const Icon = iconComponents[s.title];
                        return (
                            <div key={i} className="solution-item" style={{
                                padding: '30px',
                                borderRadius: '24px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                                    e.currentTarget.style.borderColor = 'rgba(0, 206, 209, 0.3)';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <div style={{ transform: 'scale(0.8)', marginLeft: '-10px' }}>
                                        {Icon ? <Icon /> : <div style={{ fontSize: '2.5rem' }}>{s.icon}</div>}
                                    </div>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>{s.title}</h3>
                                </div>

                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                                    {s.description}
                                </p>

                                <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {s.benefits && s.benefits.map((benefit, idx) => (
                                        <li key={idx} style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--accent-color)',
                                            background: 'rgba(0, 206, 209, 0.08)',
                                            padding: '4px 12px',
                                            borderRadius: '50px',
                                            fontWeight: '500'
                                        }}>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`https://wa.me/${businessConfig.whatsappNumber}?text=Hola, me interesa: ${s.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        marginTop: 'auto',
                                        color: '#fff',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        opacity: '0.7',
                                        transition: 'opacity 0.2s'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                    onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}
                                >
                                    Saber más <span style={{ color: 'var(--accent-color)' }}>→</span>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
