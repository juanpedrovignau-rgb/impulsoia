export default function Blog() {
    const posts = [
        { title: "IA en Pymes: Duplicando la Eficiencia Operativa", excerpt: "Descubrí las herramientas que están cambiando las reglas del juego para delegar tareas repetitivas.", date: "20 Dic, 2025" },
        { title: "Agentes Autónomos: El Futuro de los Chatbots", excerpt: "Cómo los modelos de lenguaje modernos pueden manejar ventas complejas sin intervención humana.", date: "15 Dic, 2025" },
        { title: "Guía de Automatización: De 0 a 100", excerpt: "Una hoja de ruta práctica para identificar procesos automatizables y ahorrar horas de trabajo.", date: "05 Dic, 2025" }
    ];

    return (
        <section id="blog" className="section-padding" style={{ backgroundColor: '#000' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="section-title-small">Explora el Conocimiento</span>
                    <h2 className="section-title-large">Perspectiva Tecnológica</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                    {posts.map((post, i) => (PostCard(post, i)))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <button className="btn btn-secondary">Explorar Todos los Artículos</button>
                </div>
            </div>
        </section>
    );
}

function PostCard(post, i) {
    return (
        <div key={i} className="glass-card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--accent-yellow)', marginBottom: '15px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{post.date}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '15px', lineHeight: '1.4' }}>{post.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '20px', lineHeight: '1.6', fontWeight: '300' }}>{post.excerpt}</p>
            </div>
            <a href="#" style={{
                fontWeight: '700',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                color: 'var(--accent-color)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                Leer Artículo <span style={{ fontSize: '1.1rem' }}>&rarr;</span>
            </a>
        </div>
    );
}
