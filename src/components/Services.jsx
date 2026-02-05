import React, { useEffect, useRef } from 'react';
import { businessConfig } from '../config';
import { SalesAgentIcon, AssistantIcon, InvoiceIcon, ConsultingIcon, AutomationIcon, ChatbotIcon, WebsiteIcon } from './ServiceIcons';
import Testimonials from './Testimonials';
import './Services.css';

export default function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                }
            });
        }, { threshold: 0.1 });

        const revealElements = sectionRef.current.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const iconComponents = {
        "Agente ventas IA & CRM": SalesAgentIcon,
        "Agente Asistente IA": AssistantIcon,
        "Agente IA Facturas": InvoiceIcon,
        "Consultoría Estratégica": ConsultingIcon,
        "Automatización de Procesos": AutomationIcon,
        "Desarrollo de Chatbots": ChatbotIcon,
        "Creación de websites automatizados": WebsiteIcon
    };

    return (
        <section id="services" className="section-padding services-section" ref={sectionRef}>
            {/* Video Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <div className="services-bg-overlay"></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="services-video"
                >
                    <source src="/services-bg.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container services-container">
                <div className="reveal">
                    <span className="section-title-small services-badge">Nuestras Soluciones</span>
                    <h2 className="section-title-large" style={{ marginTop: '20px' }}>Soluciones IA<br />Altamente Escalables</h2>
                    <p style={{ maxWidth: '650px', margin: '0 auto 50px', color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: '300' }}>
                        Diseñamos arquitecturas inteligentes que automatizan la complejidad y liberan el potencial de tu equipo.
                    </p>
                </div>

                {/* FIRST SECTION: Featured Packs */}
                <div className="featured-grid">
                    {businessConfig.services.slice(0, 3).map((s, i) => {
                        const Icon = iconComponents[s.title];
                        return (
                            <div
                                key={i}
                                className={`service-card-featured reveal reveal-delay-${i + 1}`}
                            >
                                {/* Badge */}
                                <div className="card-badge">
                                    {s.badge}
                                </div>

                                <div className="card-content">
                                    <div className="card-icon-container">
                                        {Icon ? <Icon /> : <div style={{ fontSize: '3rem' }}>{s.icon}</div>}
                                    </div>

                                    <h3 className="card-title">{s.title}</h3>
                                    <p className="card-description">{s.description}</p>

                                    {/* Benefits List */}
                                    <div className="benefits-list">
                                        {s.benefits && s.benefits.map((benefit, idx) => (
                                            <div key={idx} className="benefit-item">
                                                <span className="benefit-check">✓</span>
                                                {benefit}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button Area */}
                                <div
                                    className="card-cta"
                                    onClick={() => window.open(`https://wa.me/${businessConfig.whatsappNumber}?text=Hola, me interesa el pack: ${s.title}`, '_blank')}
                                >
                                    <span className="cta-text">Consultar Pack</span>
                                    <span className="cta-arrow">→</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <Testimonials isInternal={true} />

                {/* SECOND SECTION: Specialist Solutions */}
                <div className="specialties-container reveal">
                    <div style={{ marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
                        <h3 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', fontWeight: '900', color: '#fff', marginBottom: '15px', letterSpacing: '-1px' }}>Especialidades y Consultoría</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: '300' }}>Arquitecturas de alto nivel diseñadas para la eficiencia absoluta.</p>
                    </div>

                    <div className="specialties-grid">
                        {businessConfig.services.slice(3).map((s, i) => {
                            const Icon = iconComponents[s.title];
                            return (
                                <div
                                    key={i}
                                    className="specialty-card reveal"
                                    style={{ transitionDelay: `${(i % 2) * 0.1 + 0.2}s` }}
                                >
                                    <div className="specialty-icon-wrapper">
                                        {Icon ? <div style={{ transform: 'scale(0.85)', transformOrigin: 'top left' }}><Icon /></div> : <div style={{ fontSize: '2.5rem' }}>{s.icon}</div>}
                                    </div>
                                    <div>
                                        <h4 className="specialty-title">{s.title}</h4>
                                        <p className="specialty-description">{s.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="reveal" style={{ marginTop: '80px' }}>
                    <button onClick={() => window.open(`https://wa.me/${businessConfig.whatsappNumber}`, '_blank')} className="btn btn-primary">Agendar Consultoría Gratuita</button>
                </div>
            </div>
        </section>
    );
}
