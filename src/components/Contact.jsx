import { businessConfig } from '../config';

export default function Contact() {
    return (
        <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'start' }}>
                <div>
                    <span className="section-title-small">Contacto Directo</span>
                    <h2 className="section-title-large">Conectá con<br />Expertos en IA</h2>
                    <p style={{ marginBottom: '40px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', fontWeight: '300' }}>
                        Estamos listos para analizar tu caso y diseñar la arquitectura inteligente que tu empresa necesita para escalar al siguiente nivel.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)', fontSize: '1.2rem' }}>📍</div>
                            <div>
                                <h4 style={{ fontSize: '0.9rem', color: '#fff' }}>Ubicación</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{businessConfig.address}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-yellow)', fontSize: '1.2rem' }}>💼</div>
                            <div>
                                <h4 style={{ fontSize: '0.9rem', color: '#fff' }}>Especialidad</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{businessConfig.locationDetail}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '50px' }}>
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
        </section>
    );
}
