import { businessConfig } from '../config';
import React, { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const N8N_WEBHOOK_URL = 'https://n8n.tallerisidro.cloud/webhook/impulso-ia-leads';

const diagnosticAction = async (prevState, formData) => {
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error('Network response was not ok');

        return { success: true, error: null };
    } catch {
        return { success: false, error: 'Error al enviar la solicitud.' };
    }
};

function HeroSubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="btn btn-primary"
            style={{ marginTop: '10px', width: '100%', height: '55px', fontSize: '1.1rem', opacity: pending ? 0.7 : 1 }}
        >
            {pending ? 'ENVIANDO...' : '📞 CONSULTORÍA SIN CARGO'}
        </button>
    );
}

export default function Hero() {
    const [state, formAction] = useActionState(diagnosticAction, { success: false, error: null });

    return (
        <section id="home" style={{
            minHeight: '100vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start'
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1 // Ensure this container is behind the content
            }}>
                <div style={{ // Overlay
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    zIndex: 2 // Overlay on top of media
                }}></div>

                {businessConfig.hero.video ? (
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
                        <source src={businessConfig.hero.video} type="video/mp4" />
                        {/* Fallback to image if video fails to load */}
                        <img
                            src={businessConfig.hero.image}
                            alt="Hero Background"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </video>
                ) : (
                    <img
                        src={businessConfig.hero.image}
                        alt="Hero Background"
                        style={{
                            position: 0,
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 1 // Image behind overlay
                        }}
                    />
                )}
            </div>

            <div className="container grid-2-cols" style={{
                position: 'relative',
                zIndex: 5,
                paddingTop: '20px',
                paddingBottom: '20px',
                minHeight: 'calc(100vh - var(--header-height))',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                <div style={{ textAlign: 'left', flex: '1', minWidth: '300px' }}>
                    <span className="section-title-small">Consultoría de Élite</span>
                    <h1 className="hero-title" style={{ fontSize: '5rem', fontWeight: '900', marginBottom: '15px', lineHeight: '0.9', letterSpacing: '-2px' }}>
                        {businessConfig.hero.title} <br />
                        <span style={{
                            background: 'linear-gradient(to right, #ffffff, var(--accent-color))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 30px rgba(0, 206, 209, 0.3)'
                        }}>{businessConfig.hero.subtitle}</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '550px', marginBottom: '45px', color: 'var(--text-secondary)', fontWeight: '300' }}>
                        Lideramos la transición hacia procesos autónomos con <b style={{ color: '#fff' }}>Inteligencia Artificial</b> de última generación.
                    </p>
                </div>

                <div className="glass-card" style={{ padding: '24px 32px', width: '100%', maxWidth: '480px', margin: '0 0 0 auto', border: '1px solid rgba(0, 206, 209, 0.1)', minWidth: '300px' }}>
                    <h3 style={{ marginBottom: '5px', textAlign: 'center', fontSize: '1.8rem', fontWeight: '900' }}>Llamada de Diagnóstico</h3>
                    <p style={{ fontSize: '0.9rem', textAlign: 'center', marginBottom: '20px', color: 'var(--text-secondary)' }}>Reserva tu sesión estratégica de 7 minutos</p>

                    {state?.success ? (
                        <div style={{ textAlign: 'center', padding: '40px 20px', background: 'rgba(0, 206, 209, 0.05)', borderRadius: '12px', border: '1px solid var(--accent-color)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✅</div>
                            <h4 style={{ marginBottom: '10px' }}>¡Solicitud Enviada!</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Te contactaremos por WhatsApp a la brevedad.</p>
                        </div>
                    ) : (
                        <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <input type="hidden" name="source" value="Formulario Hero (Llamada Diagnóstico)" />
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                <input name="name" type="text" placeholder="Nombre" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }} required />
                                <input name="lastname" type="text" placeholder="Apellido" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }} required />
                            </div>
                            <div className="responsive-grid-2-cols" style={{ gap: '10px' }}>
                                <input name="whatsapp" type="tel" placeholder="WhatsApp" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }} required />
                                <input name="email" type="email" placeholder="Email" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }} required />
                            </div>
                            <input name="instagram" type="text" placeholder="Instagram" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }} required />

                            <textarea
                                name="content"
                                placeholder="¿Qué proceso o área de tu empresa te gustaría mejorar con IA?"
                                rows="4"
                                style={{
                                    padding: '12px',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    fontSize: '0.9rem',
                                    resize: 'none'
                                }}
                                required
                            ></textarea>

                            <HeroSubmitButton />
                            {state?.error && <p style={{ color: '#ff4444', textAlign: 'center', fontSize: '0.8rem' }}>{state.error}</p>}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
