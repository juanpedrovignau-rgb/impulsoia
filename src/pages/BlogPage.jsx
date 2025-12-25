import React, { useEffect } from 'react';
import { businessConfig } from '../config';
import { Link, useParams } from 'react-router-dom';
import VideoBackground from '../components/VideoBackground';
import SEO from '../components/SEO';

export default function BlogPage() {
    const { slug } = useParams();
    const posts = businessConfig.blog;

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

    // If slug is present, show single post
    if (slug) {
        const post = posts.find(p => p.slug === slug);
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
                            <div style={{ padding: '50px' }}>
                                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '1.15rem', fontWeight: '300', whiteSpace: 'pre-line' }}>
                                    {post.content}
                                </div>
                                <div style={{ display: 'flex', gap: '15px', marginTop: '50px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <button onClick={() => handleShare(post)} className="btn btn-secondary">🔗 Compartir</button>
                                    <a href={`https://wa.me/${businessConfig.whatsappNumber}`} className="btn btn-primary">Agendar Consultoría</a>
                                </div>
                            </div>
                        </article>
                    </main>

                    <aside>
                        <Sidebar businessConfig={businessConfig} />
                    </aside>
                </div>
            </div>
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

function Sidebar({ businessConfig }) {
    return (
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
            <div style={{ marginTop: '50px', minHeight: '300px', background: 'rgba(0, 206, 209, 0.02)', border: '1px dashed rgba(0, 206, 209, 0.2)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', color: 'rgba(0, 206, 209, 0.4)', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px' }}>Espacio Publicitario</span>
                <div style={{ width: '80%', height: '200px', background: 'rgba(0, 206, 209, 0.05)', borderRadius: '8px' }}></div>
            </div>
        </div>
    );
}
