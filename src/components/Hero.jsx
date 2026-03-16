import { businessConfig } from '../config';
import React, { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const N8N_FORM_URL = 'https://n8n.impulsoia.cloud/webhook/impulsoia-webhook';

const diagnosticAction = async (prevState, formData) => {
    const raw = Object.fromEntries(formData.entries());

    // Build payload matching n8n "On form submission" field names
    // Using URLSearchParams to send as application/x-www-form-urlencoded
    const payload = new URLSearchParams();

    // Standardized fields
    payload.append('event_type', 'form_submission');
    payload.append('name', `${raw.name || ''} ${raw.lastname || ''}`.trim());
    payload.append('email', raw.email || '');
    payload.append('phone', raw.whatsapp || '');
    payload.append('company', raw.instagram || '');
    payload.append('message', raw.content ? `Interés en mejorar: ${raw.content}` : '');

    // Metadata
    payload.append('submitted_at', new Date().toISOString());
    payload.append('source', raw.source || 'Hero Diagnóstico');

    // Keeping raw fields just in case
    payload.append('raw_instagram', raw.instagram || '');
    payload.append('raw_content', raw.content || '');

    try {
        const response = await fetch(N8N_FORM_URL, {
            method: 'POST',
            body: payload
        });

        if (!response.ok) {
            console.error('n8n response:', response.status, response.statusText);
            return { success: false, error: `Error (${response.status}). Intentá de nuevo o contactanos directamente.` };
        }

        return { success: true, error: null };
    } catch (error) {
        console.error('Error al enviar formulario Hero a n8n:', error);
        return { success: false, error: 'Error de conexión. Por favor, intentá de nuevo.' };
    }
};

function HeroSubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="btn btn-primary"
            style={{ marginTop: '10px', width: '100%', height: '55px', fontSize: '1.1rem', opacity: pending ? 0.7 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
        >
            {pending ? (<><span className="contact-spinner"></span> ENVIANDO...</>) : '📞 CONSULTORÍA SIN CARGO'}
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
                            objectPosition: 'right center',
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
                    <h1 className="hero-title" style={{ fontSize: '4.5rem', fontWeight: '900', marginBottom: '20px', lineHeight: '0.95', letterSpacing: '-2px' }}>
                        Automatiza tu negocio con <br />
                        <span style={{
                            background: 'linear-gradient(to right, #ffffff, var(--accent-color))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 30px rgba(0, 206, 209, 0.2)'
                        }}>Inteligencia Artificial</span>
                    </h1>
                    <p style={{ fontSize: '1.4rem', maxWidth: '600px', marginBottom: '15px', color: 'var(--text-secondary)', fontWeight: '300', lineHeight: '1.4' }}>
                        Creamos sistemas de IA que responden clientes, califican leads y ejecutan procesos automáticamente.
                    </p>
                    <p style={{ fontSize: '1.1rem', maxWidth: '600px', marginBottom: '45px', color: '#fff', fontWeight: '600', lineHeight: '1.4', display: 'flex', gap: '8px 15px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <span><span style={{ color: 'var(--accent-yellow)' }}>✦</span> Más ventas.</span>
                        <span><span style={{ color: 'var(--accent-yellow)' }}>✦</span> Menos trabajo manual.</span>
                        <span><span style={{ color: 'var(--accent-yellow)' }}>✦</span> Operaciones inteligentes 24/7.</span>
                    </p>

                    {/* Trust Bar */}
                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center', opacity: 0.6, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-color)' }}>TECNOLOGÍAS CORE:</span>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" alt="OpenAI" style={{ height: '18px', filter: 'brightness(0) invert(1)' }} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Google_Cloud_logo.svg" alt="Google Cloud" style={{ height: '18px', filter: 'grayscale(1) brightness(2)' }} />
                            <img src="/n8n.png" alt="n8n" style={{ height: '18px', filter: 'brightness(0) invert(1)' }} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" alt="Gemini" style={{ height: '18px', filter: 'brightness(0) invert(1)' }} />
                        </div>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '24px 32px', width: '100%', maxWidth: '480px', margin: '0 0 0 auto', border: '1px solid rgba(0, 206, 209, 0.2)', minWidth: '300px', background: 'rgba(255,255,255,0.03)', boxShadow: '0 20px 80px rgba(0,206,209,0.1)' }}>
                    <h3 style={{ marginBottom: '5px', textAlign: 'center', fontSize: '1.8rem', fontWeight: '900' }}>Sesión Estratégica</h3>
                    <p style={{ fontSize: '0.9rem', textAlign: 'center', marginBottom: '20px', color: 'var(--accent-yellow)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>7 Minutos para Transformar tu Empresa</p>

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
