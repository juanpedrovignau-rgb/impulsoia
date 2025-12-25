import React, { useEffect } from 'react';
import { businessConfig } from '../config';
import { Link } from 'react-router-dom';

export default function BlogPage() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const posts = [
        {
            title: "IA en Pymes: Duplicando la Eficiencia Operativa",
            date: "20 Dic, 2025",
            content: `La inteligencia artificial ya no es exclusividad de las grandes corporaciones tecnológicas. Hoy, las pequeñas y medianas empresas (Pymes) están encontrando en la IA la herramienta definitiva para competir en igualdad de condiciones.
            
            Desde la automatización de la atención al cliente con agentes inteligentes hasta el análisis predictivo de ventas, la IA permite a los equipos enfocarse en lo que realmente importa: la estrategia y la creatividad. En este artículo, exploramos cómo implementar soluciones de bajo costo y alto impacto que pueden duplicar tu productividad en cuestión de semanas.`
        },
        {
            title: "Agentes Autónomos: El Futuro de los Chatbots",
            date: "15 Dic, 2025",
            content: `Los chatbots tradicionales basados en flujos rígidos están siendo reemplazados por Agentes Autónomos. Estos sistemas, impulsados por modelos de lenguaje masivos (LLMs), no solo responden preguntas; entienden el contexto, aprenden de las interacciones y pueden ejecutar acciones complejas.
            
            Imagina un agente que no solo atiende una consulta, sino que además gestiona una reserva, califica a un prospecto y actualiza tu CRM automáticamente. El futuro de la atención al cliente es proactivo, inteligente y, sobre todo, autónomo.`
        },
        {
            title: "Guía de Automatización: De 0 a 100",
            date: "05 Dic, 2025",
            content: `¿Por dónde empezar cuando decides automatizar tu negocio? El error más común es intentar automatizar todo a la vez. La clave está en identificar los 'cuellos de botella' operativos: esas tareas repetitivas que consumen tiempo valioso.
            
            En esta guía práctica, te mostramos cómo mapear tus procesos actuales, seleccionar las herramientas de IA adecuadas y medir el retorno de inversión (ROI) de tus primeras automatizaciones. Ahorrar horas de trabajo es posible si sigues una hoja de ruta estratégica.`
        }
    ];

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', paddingBottom: '100px' }}>
            {/* Hero Section for Blog */}
            <div style={{
                padding: '120px 0 60px',
                textAlign: 'center',
                background: 'linear-gradient(to bottom, #0a0a0a, #000)',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
                <div className="container">
                    <span className="section-title-small">Nuestro Blog | {businessConfig.name}</span>
                    <h1 className="section-title-large" style={{ fontSize: '3.5rem' }}>Perspectivas sobre IA</h1>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Descubrí las últimas noticias, guías y tendencias en automatización e inteligencia artificial.
                    </p>
                </div>
            </div>

            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 350px', gap: '50px', marginTop: '60px' }}>
                {/* Main Content */}
                <main>
                    {posts.map((post, i) => (
                        <article key={i} className="glass-card" style={{ padding: '40px', marginBottom: '40px', textAlign: 'left' }}>
                            <div style={{ fontSize: '0.8rem', color: 'var(--accent-yellow)', marginBottom: '15px', fontWeight: 'bold' }}>{post.date}</div>
                            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '25px', lineHeight: '1.2' }}>{post.title}</h2>
                            <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem', fontWeight: '300', whiteSpace: 'pre-line' }}>
                                {post.content}
                            </div>
                            <div style={{ marginTop: '30px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <button className="btn btn-turquesa" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>Compartir Artículo</button>
                            </div>
                        </article>
                    ))}
                </main>

                {/* Sidebar */}
                <aside>
                    {/* Opt-in Form Card */}
                    <div className="glass-card" style={{ padding: '30px', position: 'sticky', top: '100px' }}>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '15px', textAlign: 'center' }}>¿Querés potenciar tu negocio?</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '25px' }}>
                            Recibí una consultoría gratuita y descubrí cómo la IA puede ayudarte.
                        </p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                window.open(`https://wa.me/${businessConfig.whatsappNumber}`, '_blank');
                            }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
                        >
                            <input type="text" placeholder="Tu Nombre" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} required />
                            <input type="tel" placeholder="Tu WhatsApp" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} required />
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', borderRadius: '8px' }}>AGENDAR AHORA</button>
                        </form>

                        {/* AdSense Placeholder */}
                        <div style={{
                            marginTop: '40px',
                            minHeight: '250px',
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px dashed rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)', marginBottom: '10px', textTransform: 'uppercase' }}>Publicidad / AdSense</span>
                            <div style={{ width: '80%', height: '150px', background: 'rgba(255,255,255,0.01)', borderRadius: '4px' }}></div>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Global AdSense Placeholder */}
            <div className="container" style={{ marginTop: '40px' }}>
                <div style={{
                    width: '100%',
                    minHeight: '90px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px dashed rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.1)',
                    fontSize: '0.8rem'
                }}>
                    Espacio para Banner AdSense 728x90
                </div>
            </div>
        </div>
    );
}
