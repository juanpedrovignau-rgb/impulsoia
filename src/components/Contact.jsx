import { businessConfig } from '../config';

export default function Contact() {
    return (
        <section id="contact" className="section-padding" style={{ position: 'relative', backgroundColor: 'var(--bg-primary)', overflow: 'hidden' }}>
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
                    zIndex: 2
                }}></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
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
                    <source src="/agente-ventas-ia.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                <div className="grid-2-cols" style={{ alignItems: 'start' }}>
                    <div className="text-md-center" style={{ textAlign: 'left' }}>
                        <span className="section-title-small">Contacto Directo</span>
                        <h2 className="section-title-large">Conectá con<br />Expertos en IA</h2>
                        <p style={{ marginBottom: '40px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', fontWeight: '300' }}>
                            Estamos listos para analizar tu caso y diseñar la arquitectura inteligente que tu empresa necesita para escalar al siguiente nivel.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'inherit' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'inherit' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)', fontSize: '1.2rem', flexShrink: 0 }}>📍</div>
                                <div style={{ textAlign: 'left' }}>
                                    <h4 style={{ fontSize: '0.9rem', color: '#fff' }}>Ubicación</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{businessConfig.address}</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'inherit' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-yellow)', fontSize: '1.2rem', flexShrink: 0 }}>💼</div>
                                <div style={{ textAlign: 'left' }}>
                                    <h4 style={{ fontSize: '0.9rem', color: '#fff' }}>Especialidad</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{businessConfig.locationDetail}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '30px', margin: '0 auto', width: '100%', maxWidth: '500px' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '30px', color: '#fff' }}>
                            Enviar Consulta
                        </h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <input type="text" placeholder="Asunto" style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }} />
                            <textarea placeholder="¿Cómo podemos ayudarte?" rows="5" style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', resize: 'none' }}></textarea>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '60px' }}>Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
