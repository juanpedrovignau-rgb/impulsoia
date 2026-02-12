import { businessConfig } from '../config';
import { Link } from 'react-router-dom';

export default function Blog() {
    const posts = [...businessConfig.blog].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

    return (
        <section id="blog" className="section-padding" style={{ backgroundColor: '#000', paddingTop: '20px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="section-title-small">Explora el Conocimiento</span>
                    <h2 className="section-title-large">Perspectiva Tecnológica</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                    {posts.map((post, i) => (PostCard(post, i)))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/blog" className="btn btn-secondary">Explorar Todos los Artículos</Link>
                </div>
            </div>
        </section>
    );
}

function PostCard(post, i) {
    return (
        <div key={i} className="glass-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                <img src={post.image} alt={post.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
            </div>
            <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--accent-yellow)', marginBottom: '15px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{post.date}</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '15px', lineHeight: '1.4' }}>{post.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '20px', lineHeight: '1.6', fontWeight: '300' }}>{post.excerpt}</p>
                </div>
                <Link to={`/blog/${post.slug}`} style={{
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                    color: 'var(--accent-color)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    Seguir Leyendo <span style={{ fontSize: '1.1rem' }}>&rarr;</span>
                </Link>
            </div>
        </div>
    );
}
