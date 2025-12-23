import { businessConfig } from '../config';

export default function Services() {

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
                    backgroundColor: 'rgba(0,0,0,0.85)',
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
                        objectFit: 'cover'
                    }}
                >
                    <source src="/services-bg.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                <span className="section-title-small">Nuestras Soluciones</span>
                <h2 className="section-title-large">Soluciones IA<br />Altamente Escalables</h2>
                <p style={{ maxWidth: '650px', margin: '0 auto 50px', color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: '300' }}>
                    Diseñamos arquitecturas inteligentes que automatizan la complejidad y liberan el potencial de tu equipo.
                </p>
                <button onClick={() => window.open(`https://wa.me/${businessConfig.whatsappNumber}`, '_blank')} className="btn btn-primary" style={{ marginBottom: '80px' }}>Consultar por un Proyecto</button>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {businessConfig.services.map((s, i) => (
                        <div key={i} className="glass-card" style={{ padding: '50px 40px', textAlign: 'left' }}>
                            <div style={{ fontSize: '3.5rem', marginBottom: '25px', color: 'var(--accent-yellow)', filter: 'drop-shadow(0 0 10px var(--accent-glow))' }}>{s.icon}</div>
                            <h3 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '15px' }}>{s.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
