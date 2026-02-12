import { businessConfig } from '../config';
import React, { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const N8N_FORM_URL = 'https://impulso-n8n.6shxj1.easypanel.host/form-test/350d547f-d833-4376-a962-e0c74dc7c575';

const contactAction = async (prevState, formData) => {
    const raw = Object.fromEntries(formData.entries());

    // Build payload matching n8n "On form submission" field names
    // Using URLSearchParams to send as application/x-www-form-urlencoded
    // This avoids CORS preflight (simple request) and is natively supported by n8n form triggers
    const payload = new URLSearchParams();
    payload.append('Nombre', raw.nombre || '');
    payload.append('Apellido', raw.apellido || '');
    payload.append('Email', raw.email || '');
    payload.append('Whatsapp', raw.whatsapp || '');
    payload.append('Instagram', raw.instagram || '');
    payload.append('Que proceso o area de tu empresa te gustaria mejorar con ia', raw.area_mejora || '');
    payload.append('submitted_at', new Date().toISOString());
    payload.append('source', raw.source || 'Formulario Web');

    try {
        const response = await fetch(N8N_FORM_URL, {
            method: 'POST',
            body: payload
        });

        if (!response.ok) {
            console.error('n8n response status:', response.status, response.statusText);
            return { success: false, error: `Error del servidor (${response.status}). Por favor, contactanos por WhatsApp.` };
        }

        return { success: true, error: null };
    } catch (error) {
        console.error('Error al enviar formulario a n8n:', error);
        return { success: false, error: 'Error de conexión. Verificá tu internet e intentá de nuevo.' };
    }
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="btn btn-primary"
            style={{
                width: '100%',
                height: '60px',
                opacity: pending ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'all 0.3s ease'
            }}
        >
            {pending ? (
                <>
                    <span className="contact-spinner"></span>
                    ENVIANDO...
                </>
            ) : (
                '🚀 Enviar Consulta'
            )}
        </button>
    );
}

const inputStyle = {
    padding: '16px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '0.95rem',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
};

const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    WebkitAppearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2300CED1' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 16px center',
    cursor: 'pointer'
};

const areasOptions = [
    'Ventas y Prospección',
    'Atención al Cliente',
    'Marketing Digital',
    'Administración y Finanzas',
    'Recursos Humanos',
    'Logística y Operaciones',
    'Gestión de Documentos / Facturas',
    'Desarrollo Web / Apps',
    'Otro'
];

export default function Contact() {
    const [state, formAction] = useActionState(contactAction, { success: false, error: null });

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

                            {/* n8n Integration Badge */}
                            <div style={{
                                marginTop: '10px',
                                padding: '12px 20px',
                                background: 'rgba(0, 206, 209, 0.08)',
                                border: '1px solid rgba(0, 206, 209, 0.2)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <span style={{ fontSize: '1.2rem' }}>⚡</span>
                                <span style={{ color: 'var(--accent-color)', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.5px' }}>
                                    CRM AUTOMATIZADO — Respuesta en menos de 24hs
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '30px', margin: '0 auto', width: '100%', maxWidth: '100%' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '8px', color: '#fff' }}>
                            Solicitar Consultoría
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '25px', fontWeight: '300' }}>
                            Completá el formulario y nuestro equipo te contactará para diseñar tu solución personalizada.
                        </p>

                        {state?.success ? (
                            <div style={{ textAlign: 'center', padding: '40px 20px', background: 'rgba(0, 206, 209, 0.05)', borderRadius: '12px', border: '1px solid var(--accent-color)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✅</div>
                                <h4 style={{ marginBottom: '10px', color: '#fff' }}>¡Consulta Recibida!</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>
                                    Tu información fue registrada en nuestro CRM. Nos pondremos en contacto a la brevedad.
                                </p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="btn btn-primary"
                                    style={{ padding: '12px 30px', fontSize: '0.85rem' }}
                                >
                                    Enviar otra consulta
                                </button>
                            </div>
                        ) : (
                            <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <input type="hidden" name="source" value="Formulario de Contacto Web — Impulso IA" />

                                {/* Row 1: Nombre + Apellido */}
                                <div className="responsive-grid-2-cols" style={{ gap: '16px' }}>
                                    <input
                                        name="nombre"
                                        type="text"
                                        placeholder="Nombre *"
                                        style={inputStyle}
                                        onFocus={e => { e.target.style.borderColor = 'var(--accent-color)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,206,209,0.15)'; }}
                                        onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                                        required
                                    />
                                    <input
                                        name="apellido"
                                        type="text"
                                        placeholder="Apellido *"
                                        style={inputStyle}
                                        onFocus={e => { e.target.style.borderColor = 'var(--accent-color)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,206,209,0.15)'; }}
                                        onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                                        required
                                    />
                                </div>

                                {/* Row 2: Email + WhatsApp */}
                                <div className="responsive-grid-2-cols" style={{ gap: '16px' }}>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Email *"
                                        style={inputStyle}
                                        onFocus={e => { e.target.style.borderColor = 'var(--accent-color)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,206,209,0.15)'; }}
                                        onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                                        required
                                    />
                                    <input
                                        name="whatsapp"
                                        type="tel"
                                        placeholder="WhatsApp *"
                                        style={inputStyle}
                                        onFocus={e => { e.target.style.borderColor = 'var(--accent-color)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,206,209,0.15)'; }}
                                        onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                                        required
                                    />
                                </div>

                                {/* Row 3: Instagram */}
                                <input
                                    name="instagram"
                                    type="text"
                                    placeholder="Instagram (ej: @tunegocio)"
                                    style={inputStyle}
                                    onFocus={e => { e.target.style.borderColor = 'var(--accent-color)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,206,209,0.15)'; }}
                                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                                />

                                {/* Row 4: Area to improve with AI */}
                                <select
                                    name="area_mejora"
                                    style={selectStyle}
                                    onFocus={e => { e.target.style.borderColor = 'var(--accent-color)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,206,209,0.15)'; }}
                                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                                    required
                                    defaultValue=""
                                >
                                    <option value="" disabled style={{ color: '#999' }}>¿Qué área te gustaría mejorar con IA? *</option>
                                    {areasOptions.map((area, i) => (
                                        <option key={i} value={area} style={{ background: '#1a1a2e', color: '#fff' }}>{area}</option>
                                    ))}
                                </select>

                                <SubmitButton />
                                {state?.error && <p style={{ color: '#ff4444', textAlign: 'center', fontSize: '0.8rem' }}>{state.error}</p>}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
