import { businessConfig } from '../config';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#000', paddingTop: '100px', borderTop: '1px solid rgba(255,255,255,0.05)', color: '#888' }}>
            <div className="container grid-4-cols" style={{ paddingBottom: '80px' }}>
                <div style={{ gridColumn: 'span 1' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff', marginBottom: '20px', letterSpacing: '-1px' }}>
                        {businessConfig.name.split(' ')[0]} <span style={{ color: 'var(--logo-ia-color)', textShadow: '0 0 10px var(--accent-glow)' }}>{businessConfig.name.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', marginBottom: '25px', lineHeight: '1.6' }}>
                        Transformando el presente con arquitecturas inteligentes para el mañana.
                    </p>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        {['LinkedIn', 'X', 'GitHub'].map(social => (
                            <a key={social} href="#" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold' }}>{social}</a>
                        ))}
                    </div>
                </div>

                <div style={{ gridColumn: 'span 1' }}>
                    <h4 style={{ color: '#fff', marginBottom: '25px', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>Soluciones</h4>
                    <ul style={{ listStyle: 'none', fontSize: '0.9rem', lineHeight: '2.5' }}>
                        {businessConfig.services.map((service, index) => (
                            <li key={index}>
                                <a href="/#services" style={{ color: 'inherit', textDecoration: 'none', transition: '0.3s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#888'}>
                                    {service.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ gridColumn: 'span 1' }}>
                    <h4 style={{ color: '#fff', marginBottom: '25px', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>Empresa</h4>
                    <ul style={{ listStyle: 'none', fontSize: '0.9rem', lineHeight: '2.5' }}>
                        <li><a href="/#about" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre Nosotros</a></li>
                        <li><a href="/#services" style={{ color: 'inherit', textDecoration: 'none' }}>Proyectos</a></li>
                        <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog Técnico</Link></li>
                        <li>Carreras</li>
                    </ul>
                </div>

                <div style={{ gridColumn: 'span 1' }}>
                    <h4 style={{ color: '#fff', marginBottom: '25px', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>Acción Inmediata</h4>
                    <button
                        onClick={() => window.open(`https://wa.me/${businessConfig.whatsappNumber}`, '_blank')}
                        className="btn btn-primary"
                        style={{ width: '100%', marginBottom: '15px' }}
                    >
                        Agenda una Demo
                    </button>
                    <p style={{ fontSize: '0.75rem', textAlign: 'center' }}>Respuesta en menos de 2 horas</p>
                </div>
            </div>

            <div style={{ backgroundColor: '#050505', padding: '30px 0', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem' }}>
                    <span>&copy; {new Date().getFullYear()} {businessConfig.name}</span>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <span>Privacidad</span>
                        <span>Términos</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
