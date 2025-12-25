import { businessConfig } from '../config';

export default function Hero() {
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
                            position: 'absolute',
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
                paddingTop: '40px',
                paddingBottom: '20px',
                minHeight: 'calc(100vh - var(--header-height))'
            }}>
                <div style={{ textAlign: 'left' }}>
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

                <div className="glass-card" style={{ padding: '24px 32px', width: '100%', maxWidth: '480px', margin: '0 0 0 auto', border: '1px solid rgba(0, 206, 209, 0.1)' }}>
                    <h3 style={{ marginBottom: '5px', textAlign: 'center', fontSize: '1.8rem', fontWeight: '900' }}>Llamada de Diagnóstico</h3>
                    <p style={{ fontSize: '0.9rem', textAlign: 'center', marginBottom: '20px', color: 'var(--text-secondary)' }}>Reserva tu sesión estratégica de 7 minutos</p>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            <input type="text" placeholder="Nombre" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }} required />
                            <input type="text" placeholder="Apellido" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }} required />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            <input type="tel" placeholder="WhatsApp" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }} required />
                            <input type="email" placeholder="Email" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }} required />
                        </div>
                        <input type="text" placeholder="Instagram" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }} required />

                        <textarea
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

                        <button type="submit" className="btn btn-primary" style={{ marginTop: '10px', width: '100%', height: '55px', fontSize: '1.1rem' }}>📞 LLAMADA GRATIS</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
