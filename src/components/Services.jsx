import { businessConfig } from '../config';
import { SalesAgentIcon, AssistantIcon, InvoiceIcon, ConsultingIcon, AutomationIcon, ChatbotIcon, WebsiteIcon } from './ServiceIcons';

export default function Services() {

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
        <section id="services" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Video Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, rgba(0, 206, 209, 0.08) 0%, rgba(0,0,0,0.95) 80%)', // Spotlight effect
                    zIndex: 1
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
                        opacity: 0.4
                    }}
                >
                    <source src="/services-bg.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                <span className="section-title-small" style={{ background: 'rgba(0, 206, 209, 0.1)', padding: '5px 15px', borderRadius: '20px' }}>Nuestras Soluciones</span>
                <h2 className="section-title-large" style={{ marginTop: '20px' }}>Soluciones IA<br />Altamente Escalables</h2>
                <p style={{ maxWidth: '650px', margin: '0 auto 50px', color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: '300' }}>
                    Diseñamos arquitecturas inteligentes que automatizan la complejidad y liberan el potencial de tu equipo.
                </p>

                {/* FIRST SECTION: Featured Packs */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                    gap: '30px',
                    marginBottom: '80px'
                }}>
                    {businessConfig.services.slice(0, 3).map((s, i) => {
                        const Icon = iconComponents[s.title];
                        return (
                            <div key={i} className="glass-card" style={{
                                padding: '0',
                                textAlign: 'left',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '16px',
                                background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.borderColor = 'var(--accent-color)';
                                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 206, 209, 0.15), inset 0 0 20px rgba(0, 206, 209, 0.05)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    background: 'rgba(0, 206, 209, 0.15)',
                                    padding: '5px 12px',
                                    borderRadius: '50px',
                                    border: '1px solid rgba(0, 206, 209, 0.3)',
                                    fontSize: '0.75rem',
                                    fontWeight: '800',
                                    color: 'var(--accent-color)',
                                    letterSpacing: '0.5px'
                                }}>
                                    {s.badge}
                                </div>

                                <div style={{ padding: '40px 30px', flex: '1' }}>
                                    <div style={{ marginBottom: '25px', display: 'flex', justifyContent: 'flex-start' }}>
                                        {Icon ? <Icon /> : <div style={{ fontSize: '3rem' }}>{s.icon}</div>}
                                    </div>

                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '10px', color: '#fff', letterSpacing: '-0.5px', minHeight: '60px', display: 'flex', alignItems: 'center' }}>{s.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '25px', minHeight: '50px' }}>{s.description}</p>

                                    {/* Benefits List */}
                                    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                        {s.benefits && s.benefits.map((benefit, idx) => (
                                            <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                                                <span style={{ color: 'var(--accent-color)', marginRight: '10px', fontWeight: 'bold' }}>✓</span>
                                                {benefit}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button Area */}
                                <div style={{
                                    padding: '20px 30px',
                                    background: 'rgba(0,0,0,0.2)',
                                    borderTop: '1px solid rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    cursor: 'pointer',
                                    marginTop: 'auto'
                                }}
                                    onClick={() => window.open(`https://wa.me/${businessConfig.whatsappNumber}?text=Hola, me interesa el pack: ${s.title}`, '_blank')}
                                >
                                    <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#fff' }}>Consultar Pack</span>
                                    <span style={{ color: 'var(--accent-color)', fontSize: '1.2rem', transform: 'translateX(0)', transition: 'transform 0.3s' }}
                                        className="arrow-icon"
                                    >→</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* SECOND SECTION: Specialist Solutions */}
                <div style={{
                    padding: 'clamp(30px, 8vw, 80px) clamp(15px, 5vw, 50px)',
                    background: 'rgba(255,255,255,0.015)',
                    borderRadius: '40px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    textAlign: 'center',
                    marginTop: '20px'
                }}>
                    <div style={{ marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
                        <h3 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', fontWeight: '900', color: '#fff', marginBottom: '15px', letterSpacing: '-1px' }}>Especialidades y Consultoría</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: '300' }}>Arquitecturas de alto nivel diseñadas para la eficiencia absoluta.</p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
                        gap: '24px',
                        textAlign: 'left'
                    }}>
                        {businessConfig.services.slice(3).map((s, i) => {
                            const Icon = iconComponents[s.title];
                            return (
                                <div key={i} style={{
                                    padding: '35px',
                                    borderRadius: '24px',
                                    border: '1px solid rgba(255,255,255,0.03)',
                                    display: 'flex',
                                    gap: '25px',
                                    alignItems: 'flex-start',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    background: 'rgba(0,0,0,0.3)',
                                    height: '100%'
                                }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                        e.currentTarget.style.borderColor = 'rgba(0,206,209,0.2)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        const icon = e.currentTarget.querySelector('.service-icon-container');
                                        if (icon) icon.style.transform = 'scale(1.1) rotate(5deg)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.background = 'rgba(0,0,0,0.3)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        const icon = e.currentTarget.querySelector('.service-icon-container');
                                        if (icon) icon.style.transform = 'scale(1) rotate(0deg)';
                                    }}
                                >
                                    <div className="service-icon-container" style={{ flexShrink: 0, transition: 'transform 0.4s ease', width: '60px' }}>
                                        {Icon ? <div style={{ transform: 'scale(0.85)', transformOrigin: 'top left' }}><Icon /></div> : <div style={{ fontSize: '2.5rem' }}>{s.icon}</div>}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fff', marginBottom: '10px', letterSpacing: '-0.3px' }}>{s.title}</h4>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: '0', fontWeight: '300' }}>{s.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div style={{ marginTop: '80px' }}>
                    <button onClick={() => window.open(`https://wa.me/${businessConfig.whatsappNumber}`, '_blank')} className="btn btn-primary">Agendar Consultoría Gratuita</button>
                </div>
            </div>
        </section>
    );
}
