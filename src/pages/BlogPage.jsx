import React, { useEffect, useState } from 'react';
import { businessConfig } from '../config';
import { Link, useParams } from 'react-router-dom';
import VideoBackground from '../components/VideoBackground';
import SEO from '../components/SEO';
import AdSlot from '../components/AdSlot';

export default function BlogPage() {
    const { slug } = useParams();
    const posts = [...businessConfig.blog].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Scroll to top on mount or slug change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const handleShare = (post) => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                text: post.excerpt,
                url: window.location.href,
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('¡Enlace copiado al portapapeles!');
        }
    };

    const post = slug ? posts.find(p => p.slug === slug) : null;

    // If slug is present, show single post
    if (slug) {
        if (!post) {
            return (
                <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', textAlign: 'center', padding: '100px' }}>
                    <h2>Artículo no encontrado</h2>
                    <Link to="/blog" className="btn btn-secondary" style={{ marginTop: '20px' }}>Volver al Blog</Link>
                </div>
            );
        }

        return (
            <div style={{ backgroundColor: '#000', minHeight: '100vh', paddingBottom: '100px' }}>
                <SEO
                    title={`${post.title} | Blog Impulso IA`}
                    description={post.excerpt}
                    keywords={post.keywords}
                    ogImage={post.image}
                    postData={post}
                />

                <div style={{ position: 'relative', padding: '160px 0 100px', textAlign: 'center', overflow: 'hidden' }}>
                    <VideoBackground overlayOpacity={0.85} />
                    <div className="container" style={{ position: 'relative', zIndex: 5 }}>
                        <Link to="/blog" style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: '20px', display: 'inline-block' }}>&larr; Volver al Blog</Link>
                        <h1 className="section-title-large" style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '20px' }}>
                            {post.title}
                        </h1>
                        <time dateTime={post.date} style={{ color: 'var(--accent-yellow)', fontSize: '0.9rem', fontWeight: 'bold' }}>{post.dateFormatted}</time>
                    </div>
                </div>

                <div className="container blog-main-grid" style={{ marginTop: '60px' }}>
                    <main>
                        <article className="glass-card" style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{
                                maxWidth: '800px',
                                margin: '0 auto',
                                color: 'var(--text-secondary)',
                                lineHeight: '1.9',
                                fontSize: '1.15rem',
                                fontWeight: '300'
                            }}>
                                {post.content.split('\n').map((line, index) => {
                                    if (line.trim() === '') return <br key={index} />;
                                    if (line.trim() === '---') return <hr key={index} style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '40px 0' }} />;

                                    // Handle Headers (Subtitles)
                                    if (line.trim().startsWith('## ')) {
                                        const headerText = line.trim().replace(/^## /, '');
                                        return <h2 key={index} style={{
                                            color: '#fff',
                                            fontSize: '1.8rem',
                                            fontWeight: '800',
                                            marginTop: '45px',
                                            marginBottom: '20px',
                                            letterSpacing: '-0.5px'
                                        }}>{headerText}</h2>;
                                    }

                                    if (line.trim().startsWith('### ')) {
                                        const headerText = line.trim().replace(/^### /, '');
                                        return <h3 key={index} style={{
                                            color: 'var(--accent-color)',
                                            fontSize: '1.4rem',
                                            fontWeight: '700',
                                            marginTop: '35px',
                                            marginBottom: '15px'
                                        }}>{headerText}</h3>;
                                    }

                                    // Handle lists
                                    if (line.match(/^\d+\. /)) {
                                        const listNumber = line.split('. ')[0];
                                        const restOfLine = line.split('. ').slice(1).join('. ');
                                        const parts = restOfLine.split(/(\*\*.*?\*\*)/g);
                                        const formattedLine = parts.map((part, i) => {
                                            if (part.startsWith('**') && part.endsWith('**')) {
                                                return <strong key={i} style={{ color: '#fff', fontWeight: '800' }}>{part.slice(2, -2)}</strong>;
                                            }
                                            return part;
                                        });

                                        return (
                                            <div key={index} style={{ marginBottom: '15px', paddingLeft: '20px', display: 'flex', gap: '10px', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                                <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{listNumber}.</span>
                                                <span>{formattedLine}</span>
                                            </div>
                                        );
                                    }

                                    if (line.trim().startsWith('- ')) {
                                        const content = line.trim().replace('- ', '');
                                        const parts = content.split(/(\*\*.*?\*\*)/g);
                                        const formattedLine = parts.map((part, i) => {
                                            if (part.startsWith('**') && part.endsWith('**')) {
                                                return <strong key={i} style={{ color: '#fff', fontWeight: '700' }}>{part.slice(2, -2)}</strong>;
                                            }
                                            return part;
                                        });

                                        return (
                                            <div key={index} style={{ marginBottom: '12px', paddingLeft: '20px', display: 'flex', gap: '10px', lineHeight: '1.7' }}>
                                                <span style={{ color: 'var(--accent-color)' }}>•</span>
                                                <span>{formattedLine}</span>
                                            </div>
                                        );
                                    }

                                    // Standard Paragraph with bold support
                                    const parts = line.split(/(\*\*.*?\*\*)/g);
                                    const formattedLine = parts.map((part, i) => {
                                        if (part.startsWith('**') && part.endsWith('**')) {
                                            return <strong key={i} style={{ color: '#fff', fontWeight: '800' }}>{part.slice(2, -2)}</strong>;
                                        }
                                        return part;
                                    });

                                    // INJECT IN-CONTENT AD AFTER 2ND PARAGRAPH
                                    const isParagraph = !line.trim().startsWith('##') && !line.trim().startsWith('-') && !line.match(/^\d+\./);
                                    const paragraphIndex = post.content.split('\n').filter((l, i) => i < index && !l.trim().startsWith('##') && !l.trim().startsWith('-') && !l.match(/^\d+\./) && l.trim() !== '' && l.trim() !== '---').length;

                                    return (
                                        <React.Fragment key={index}>
                                            <p style={{ marginBottom: '20px', fontSize: '1.15rem', lineHeight: '1.9' }}>
                                                {formattedLine}
                                            </p>
                                            {isParagraph && paragraphIndex === 1 && (
                                                <div style={{ margin: '40px 0', padding: '20px', background: 'rgba(0, 206, 209, 0.02)', border: '1px dashed rgba(0, 206, 209, 0.2)', borderRadius: '8px', textAlign: 'center' }}>
                                                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '10px' }}>PUBLICIDAD</span>
                                                    <AdSlot adSlot="1234567890" adFormat="horizontal" />
                                                </div>
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </div>

                            {/* Related Posts Section for Increased Pageviews */}
                            <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fff', marginBottom: '30px' }}>Artículos Relacionados</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                                    {posts.filter(p => p.id !== post.id).slice(0, 3).map(relatedPost => (
                                        <Link
                                            key={relatedPost.id}
                                            to={`/blog/${relatedPost.slug}`}
                                            style={{
                                                textDecoration: 'none',
                                                background: 'rgba(255,255,255,0.02)',
                                                border: '1px solid rgba(255,255,255,0.05)',
                                                borderRadius: '8px',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.borderColor = 'var(--accent-color)';
                                                e.currentTarget.style.transform = 'translateY(-4px)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            <img src={relatedPost.image} alt={relatedPost.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                                            <div style={{ padding: '15px' }}>
                                                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', marginBottom: '8px', lineHeight: '1.3' }}>{relatedPost.title}</h4>
                                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{relatedPost.excerpt.substring(0, 80)}...</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '60px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <button onClick={() => handleShare(post)} className="btn btn-secondary">🔗 Compartir Artículo</button>
                                <a href={`https://wa.me/${businessConfig.whatsappNumber}`} className="btn btn-primary" style={{ boxShadow: '0 0 20px var(--accent-glow)' }}>AGENDAR CONSULTORÍA GRATIS</a>
                            </div>
                        </article>
                    </main>

                    <aside>
                        <Sidebar businessConfig={businessConfig} />
                    </aside>
                </div>
            </div >
        );
    }

    // Default: Show list of posts
    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', paddingBottom: '100px' }}>
            <SEO
                title="Blog IA y Automatización | Impulso IA"
                description="Descubre las últimas tendencias en Inteligencia Artificial y cómo automatizar tu negocio para escalar al siguiente nivel."
            />

            {/* Hero Section for Blog */}
            <div style={{ position: 'relative', padding: '160px 0 100px', textAlign: 'center', overflow: 'hidden' }}>
                <VideoBackground overlayOpacity={0.85} />
                <div className="container" style={{ position: 'relative', zIndex: 5 }}>
                    <span className="section-title-small" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Nuestro Blog | {businessConfig.name}</span>
                    <h1 className="section-title-large" style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '20px' }}>Perspectivas sobre IA</h1>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem', fontWeight: '300' }}>
                        Explora las últimas tendencias y guías prácticas para llevar tu empresa al siguiente nivel con tecnología autónoma.
                    </p>
                </div>
            </div>

            <div className="container blog-main-grid" style={{ marginTop: '80px' }}>
                <main>
                    {posts.map((post, i) => (
                        <article key={i} className="glass-card" style={{ padding: '0', marginBottom: '60px', textAlign: 'left', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ position: 'relative', padding: '60px 40px', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 2 }}></div>
                                <img src={post.image} alt={post.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
                                <div style={{ position: 'relative', zIndex: 5 }}>
                                    <time dateTime={post.date} style={{ fontSize: '0.8rem', color: 'var(--accent-yellow)', marginBottom: '15px', fontWeight: 'bold', textTransform: 'uppercase', display: 'block' }}>{post.dateFormatted}</time>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '0', lineHeight: '1.1', color: '#fff' }}>{post.title}</h2>
                                </div>
                            </div>
                            <div style={{ padding: '40px' }}>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', fontWeight: '300', marginBottom: '30px' }}>{post.excerpt}</p>
                                <div style={{ display: 'flex', gap: '15px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <Link to={`/blog/${post.slug}`} className="btn btn-turquesa">Seguir Leyendo</Link>
                                    <button onClick={() => handleShare(post)} className="btn btn-secondary">🔗 Compartir</button>
                                </div>
                            </div>
                        </article>
                    ))}
                </main>
                <aside>
                    <Sidebar businessConfig={businessConfig} />
                </aside>
            </div>
        </div>
    );
}

function Sidebar() {
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data.source = 'Blog Sidebar Form';

        try {
            // Reemplazar con URL real de n8n
            // await fetch('YOUR_N8N_WEBHOOK_URL', { ... });
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            e.target.reset();
        } catch {
            setStatus('error');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Static Sidebar Content: Form & Lead Magnet */}
            <div className="glass-card" style={{ padding: '40px', border: '1px solid rgba(0, 206, 209, 0.1)' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '15px', textAlign: 'center' }}>Potenciá tu Negocio</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '30px', fontWeight: '300' }}>
                    Agendá una sesión estratégica gratuita y descubrí el potencial de la IA en tu empresa.
                </p>

                {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(0, 206, 209, 0.05)', borderRadius: '12px', border: '1px solid var(--accent-color)' }}>
                        <p style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>¡Gracias por tu interés!</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Te contactaremos pronto.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <input name="name" type="text" placeholder="Nombre Completo" style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff' }} required />
                        <input name="whatsapp" type="tel" placeholder="WhatsApp" style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff' }} required />
                        <button type="submit" disabled={status === 'loading'} className="btn btn-primary" style={{ width: '100%', height: '60px', fontSize: '1.1rem' }}>
                            {status === 'loading' ? 'ENVIANDO...' : 'AGENDAR CONSULTA'}
                        </button>
                    </form>
                )}

                {/* Lead Magnet Section - Executive/Premium Style */}
                <div style={{
                    marginTop: '40px',
                    padding: '30px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.02)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
                }}>

                    {/* Header with Premium Corporate Style */}
                    <div style={{ background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 100%)', padding: '15px', borderRadius: '8px', marginBottom: '25px', borderLeft: '4px solid var(--accent-color)' }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', margin: 0, letterSpacing: '0.5px', fontFamily: 'Inter, sans-serif' }}>
                            <span style={{ color: 'var(--accent-color)', marginRight: '10px' }}>■</span>
                            INTELIGENCIA EMPRESARIAL
                        </h4>
                    </div>

                    <h5 style={{ fontSize: '1.6rem', fontWeight: '800', textAlign: 'left', lineHeight: '1.3', marginBottom: '15px', color: '#fff' }}>
                        Calculadora de <span style={{ background: 'linear-gradient(120deg, var(--accent-color) 0%, #fff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ROI & Eficiencia</span>
                    </h5>

                    <p style={{ textAlign: 'left', color: '#94a3b8', fontSize: '0.95rem', marginBottom: '25px', lineHeight: '1.6' }}>
                        Acceda a una proyección financiera detallada sobre el impacto de la automatización en sus flujos de trabajo actuales. Herramienta de uso exclusivo para directivos.
                    </p>

                    <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', marginBottom: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <img
                            src="/ia-vs-sales-roi.png"
                            alt="Proyección Financiera Corporativa"
                            width="400"
                            height="250"
                            loading="lazy"
                            style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block', filter: 'grayscale(20%) contrast(110%)' }}
                        />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'rgba(15, 23, 42, 0.9)', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: '500', letterSpacing: '1px' }}>REPORTE 2026</span>
                            <span style={{ color: 'var(--accent-color)', fontSize: '0.8rem' }}>CONFIDENCIAL</span>
                        </div>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <ul style={{ listStyle: 'none', padding: 0, color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '2' }}>
                            <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px', marginBottom: '8px' }}>
                                • Auditoría de Procesos Operativos
                            </li>
                            <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px', marginBottom: '8px' }}>
                                • Análisis de Costo-Oportunidad
                            </li>
                            <li>
                                • Hoja de Ruta de Implementación Técnica
                            </li>
                        </ul>
                    </div>

                    <form onSubmit={(e) => { e.preventDefault(); alert("Solicitud de acceso enviada correctamente."); }} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ position: 'relative' }}>
                            <input type="email" placeholder="Correo Electrónico Corporativo" style={{
                                padding: '16px',
                                background: 'transparent',
                                border: '1px solid rgba(255,255,255,0.2)',
                                borderRadius: '4px',
                                color: '#fff',
                                width: '100%',
                                fontSize: '0.95rem',
                                fontFamily: 'Inter, sans-serif'
                            }} required />
                        </div>
                        <button type="submit" style={{
                            width: '100%',
                            padding: '16px',
                            fontSize: '0.95rem',
                            fontWeight: '800',
                            letterSpacing: '1px',
                            background: 'var(--accent-color)',
                            color: '#000000',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            boxShadow: '0 4px 15px rgba(0, 206, 209, 0.3)',
                            transition: 'transform 0.2s ease'
                        }}
                            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            Solicitar Acceso
                        </button>
                        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                            🔒 Envío inmediato a tu bandeja de entrada.
                        </p>
                    </form>
                </div>
            </div>

            {/* Sticky Ad Container */}
            <div style={{ position: 'sticky', top: '120px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ minHeight: '300px', background: 'rgba(0, 206, 209, 0.02)', border: '1px dashed rgba(0, 206, 209, 0.2)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', overflow: 'hidden' }}>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginBottom: '10px' }}>PUBLICIDAD PARTNER</span>
                    <AdSlot adSlot="0987654321" adFormat="rectangle" />
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
                    <p>Impulso IA © 2026</p>
                </div>
            </div>
        </div>
    );
}
