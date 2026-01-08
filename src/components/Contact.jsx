import { businessConfig } from '../config';
import React, { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data.source = 'Home Contact Form';

        try {
            // Reemplazar con URL real de n8n
            // const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // });

            // Simulación de envío exitoso
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            e.target.reset();

            // Opcional: Abrir WhatsApp después de guardar
            // window.open(`https://wa.me/${businessConfig.whatsappNumber}?text=Hola, envié una consulta sobre: ${data.subject}`, '_blank');
        } catch (error) {
            console.error('Error al enviar:', error);
            setStatus('error');
        }
    };

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

                    <div className="glass-card" style={{ padding: '30px', margin: '0 auto', width: '100%', maxWidth: '100%' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '30px', color: '#fff' }}>
                            Enviar Consulta
                        </h3>
                        {status === 'success' ? (
                            <div style={{ textAlign: 'center', padding: '40px 20px', background: 'rgba(0, 206, 209, 0.05)', borderRadius: '12px', border: '1px solid var(--accent-color)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✅</div>
                                <h4 style={{ marginBottom: '10px' }}>¡Mensaje Enviado!</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Nos pondremos en contacto contigo a la brevedad.</p>
                                <button onClick={() => setStatus('idle')} className="btn btn-secondary" style={{ marginTop: '20px' }}>Enviar otro</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input name="subject" type="text" placeholder="Asunto" style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }} required />
                                <textarea name="message" placeholder="¿Cómo podemos ayudarte?" rows="5" style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', resize: 'none' }} required></textarea>
                                <button type="submit" disabled={status === 'loading'} className="btn btn-primary" style={{ width: '100%', height: '60px', opacity: status === 'loading' ? 0.7 : 1 }}>
                                    {status === 'loading' ? 'ENVIANDO...' : 'Enviar Mensaje'}
                                </button>
                                {status === 'error' && <p style={{ color: '#ff4444', textAlign: 'center', fontSize: '0.8rem' }}>Error al enviar. Intenta de nuevo.</p>}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
