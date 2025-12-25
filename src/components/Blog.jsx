import { Link } from 'react-router-dom';

export default function Blog() {
    const posts = [
        {
            title: "IA en Pymes: Duplicando la Eficiencia Operativa",
            excerpt: "La inteligencia artificial está transformando el panorama de las Pymes en 2025. Al implementar agentes autónomos y herramientas de automatización, las empresas locales están logrando duplicar su eficiencia operativa en tiempo récord.",
            date: "20 Dic, 2025",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
            fullContent: "La inteligencia artificial está transformando el panorama de las Pymes en 2025. Al implementar agentes autónomos y herramientas de automatización, las empresas locales están logrando duplicar su eficiencia operativa en tiempo récord. No se trata solo de tecnología, sino de liberar al talento humano de tareas repetitivas para enfocarse en la estrategia comercial. Desde la gestión de inventarios hasta la atención al cliente proactiva, la IA permite escalar sin aumentar proporcionalmente los costos fijos. Adoptar estas soluciones hoy es la única forma de asegurar la competitividad en un mercado global digitalizado y dinámico."
        },
        {
            title: "Agentes Autónomos: El Futuro de los Chatbots",
            excerpt: "Los chatbots convencionales han evolucionado hacia Agentes Autónomos capaces de tomar decisiones basadas en contexto real. Estos sistemas de IA no solo responden consultas, sino que ejecutan flujos de trabajo completos.",
            date: "15 Dic, 2025",
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=1000&auto=format&fit=crop",
            fullContent: "Los chatbots convencionales han evolucionado hacia Agentes Autónomos capaces de tomar decisiones basadas en contexto real. Estos sistemas de IA no solo responden consultas, sino que ejecutan flujos de trabajo completos, desde la calificación de prospectos hasta el cierre de ventas y actualización de CRM en tiempo real. La integración de Agentes Autónomos permite a las empresas ofrecer una experiencia de usuario hiper-personalizada las 24 horas del día. Es el fin de la espera y el comienzo de la interacción inteligente inmediata, optimizando la tasa de conversión y garantizando un soporte de élite sin intervención humana."
        },
        {
            title: "Guía de Automatización: De 0 a 100",
            excerpt: "Iniciar el camino de la automatización empresarial requiere una hoja de ruta clara para maximizar el ROI. El primer paso es identificar los cuellos de botella operativos donde la IA puede generar un impacto inmediato.",
            date: "05 Dic, 2025",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
            fullContent: "Iniciar el camino de la automatización empresarial requiere una hoja de ruta clara para maximizar el ROI. El primer paso es identificar los cuellos de botella operativos donde la IA puede generar un impacto inmediato, como la entrada de datos o la programación de citas. Esta guía práctica detalla cómo seleccionar las herramientas adecuadas y escalar gradualmente los procesos. La clave del éxito reside en la integración fluida entre los sistemas existentes y las nuevas soluciones autónomas. No automatices por tendencia, hazlo para ahorrar horas críticas de trabajo y potenciar el crecimiento sostenible de tu organización."
        }
    ];

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
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
            </div>
            <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--accent-yellow)', marginBottom: '15px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{post.date}</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '15px', lineHeight: '1.4' }}>{post.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '20px', lineHeight: '1.6', fontWeight: '300' }}>{post.excerpt}</p>
                </div>
                <Link to="/blog" style={{
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
