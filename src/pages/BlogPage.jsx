import React, { useEffect } from 'react';
import { businessConfig } from '../config';
import { Link } from 'react-router-dom';
import VideoBackground from '../components/VideoBackground';

export default function BlogPage() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const posts = [
        {
            title: "IA en Pymes: Duplicando la Eficiencia Operativa",
            date: "20 Dic, 2025",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
            content: "La inteligencia artificial está transformando el panorama de las Pymes en 2025. Al implementar agentes autónomos y herramientas de automatización, las empresas locales están logrando duplicar su eficiencia operativa en tiempo récord. No se trata solo de tecnología, sino de liberar al talento humano de tareas repetitivas para enfocarse en la estrategia comercial. Desde la gestión de inventarios hasta la atención al cliente proactiva, la IA permite escalar sin aumentar proporcionalmente los costos fijos. Adoptar estas soluciones hoy es la única forma de asegurar la competitividad en un mercado global digitalizado y dinámico."
        },
        {
            title: "Agentes Autónomos: El Futuro de los Chatbots",
            date: "15 Dic, 2025",
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=1000&auto=format&fit=crop",
            content: "Los chatbots convencionales han evolucionado hacia Agentes Autónomos capaces de tomar decisiones basadas en contexto real. Estos sistemas de IA no solo responden consultas, sino que ejecutan flujos de trabajo completos, desde la calificación de prospectos hasta el cierre de ventas y actualización de CRM en tiempo real. La integración de Agentes Autónomos permite a las empresas ofrecer una experiencia de usuario hiper-personalizada las 24 horas del día. Es el fin de la espera y el comienzo de la interacción inteligente inmediata, optimizando la tasa de conversión y garantizando un soporte de élite sin intervención humana."
        },
        {
            title: "Guía de Automatización: De 0 a 100",
            date: "05 Dic, 2025",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
            content: "Iniciar el camino de la automatización empresarial requiere una hoja de ruta clara para maximizar el ROI. El primer paso es identificar los cuellos de botella operativos donde la IA puede generar un impacto inmediato, como la entrada de datos o la programación de citas. Esta guía práctica detalla cómo seleccionar las herramientas adecuadas y escalar gradualmente los procesos. La clave del éxito reside en la integración fluida entre los sistemas existentes y las nuevas soluciones autónomas. No automatices por tendencia, hazlo para ahorrar horas críticas de trabajo y potenciar el crecimiento sostenible de tu organización."
        }
    ];

    const handleShare = (post) => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                text: post.content.substring(0, 100) + '...',
                url: window.location.href,
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('¡Enlace copiado al portapapeles!');
        }
    };

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', paddingBottom: '100px' }}>
            {/* Hero Section for Blog with Video Background */}
            <div style={{
                position: 'relative',
                padding: '160px 0 100px',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                <VideoBackground overlayOpacity={0.85} />
                <div className="container" style={{ position: 'relative', zIndex: 5 }}>
                    <span className="section-title-small" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Nuestro Blog | {businessConfig.name}</span>
                    <h1 className="section-title-large" style={{
                        fontSize: '4.5rem',
                        fontWeight: '900',
                        lineHeight: '1.1',
                        marginBottom: '20px'
                    }}>Perspectivas sobre IA</h1>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem', fontWeight: '300' }}>
                        Explora las últimas tendencias y guías prácticas para llevar tu empresa al siguiente nivel con tecnología autónoma.
                    </p>
                </div>
            </div>

            <div className="container blog-main-grid" style={{ marginTop: '80px' }}>
                {/* Main Content */}
                <main>
                    {posts.map((post, i) => (
                        <article key={i} className="glass-card" style={{
                            padding: '0',
                            marginBottom: '60px',
                            textAlign: 'left',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            {/* Article Header with Video Background */}
                            <div style={{ position: 'relative', padding: '60px 40px', overflow: 'hidden' }}>
                                <VideoBackground overlayOpacity={0.7} />
                                <div style={{ position: 'relative', zIndex: 5 }}>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-yellow)', marginBottom: '15px', fontWeight: 'bold', textTransform: 'uppercase' }}>{post.date}</div>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '0', lineHeight: '1.1', color: '#fff' }}>{post.title}</h2>
                                </div>
                            </div>

                            <div style={{ padding: '40px' }}>
                                {/* Article Image */}
                                <div style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '30px' }}>
                                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>

                                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', fontWeight: '300', whiteSpace: 'pre-line', marginBottom: '40px' }}>
                                    {post.content}
                                </div>

                                <div style={{ display: 'flex', gap: '15px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <button
                                        onClick={() => handleShare(post)}
                                        className="btn btn-secondary"
                                        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                                    >
                                        <span style={{ fontSize: '1.2rem' }}>🔗</span> Compartir Artículo
                                    </button>
                                    <button className="btn btn-turquesa" style={{ opacity: 0.8 }}>
                                        Seguir Leyendo
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </main>

                {/* Sidebar */}
                <aside>
                    <div className="glass-card" style={{ padding: '40px', position: 'sticky', top: '120px', border: '1px solid rgba(0, 206, 209, 0.1)' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '15px', textAlign: 'center' }}>Potenciá tu Negocio</h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '30px', fontWeight: '300' }}>
                            Agendá una sesión estratégica gratuita y descubrí el potencial de la IA en tu empresa.
                        </p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                window.open(`https://wa.me/${businessConfig.whatsappNumber}`, '_blank');
                            }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                        >
                            <input type="text" placeholder="Nombre Completo" style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff' }} required />
                            <input type="tel" placeholder="WhatsApp" style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff' }} required />
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '60px', fontSize: '1.1rem' }}>AGENDAR CONSULTA</button>
                        </form>

                        {/* Sidebar Ad Placeholder */}
                        <div style={{
                            marginTop: '50px',
                            minHeight: '300px',
                            background: 'rgba(0, 206, 209, 0.02)',
                            border: '1px dashed rgba(0, 206, 209, 0.2)',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <span style={{ fontSize: '0.75rem', color: 'rgba(0, 206, 209, 0.4)', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px' }}>Espacio Publicitario</span>
                            <div style={{ width: '80%', height: '200px', background: 'rgba(0, 206, 209, 0.05)', borderRadius: '8px' }}></div>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Bottom Ad Placeholder */}
            <div className="container" style={{ marginTop: '60px' }}>
                <div style={{
                    width: '100%',
                    minHeight: '120px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px dashed rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.1)',
                    fontSize: '0.9rem',
                    letterSpacing: '1px'
                }}>
                    BANNER PUBLICITARIO PREMIUM 970x120
                </div>
            </div>
        </div>
    );
}
