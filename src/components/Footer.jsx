import { businessConfig } from '../config';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="container grid-4-cols footer-grid">
                <div className="footer-col">
                    <div className="footer-logo">
                        {businessConfig.name.split(' ')[0]} <span>{businessConfig.name.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <p>
                        Transformando el presente con arquitecturas inteligentes para el mañana.
                    </p>
                    <div className="social-links">
                        {['LinkedIn', 'X', 'GitHub'].map(social => (
                            <a key={social} href="#">{social}</a>
                        ))}
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Soluciones</h4>
                    <ul>
                        {businessConfig.services.map((service, index) => (
                            <li key={index}>
                                <a href="/#services" className="footer-link">
                                    {service.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="/#home" className="footer-link">Inicio</a></li>
                        <li><a href="/#services" className="footer-link">Proyectos</a></li>
                        <li><Link to="/blog" className="footer-link">Blog Técnico</Link></li>
                        <li style={{ color: '#555' }}>Carreras</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Acción Inmediata</h4>
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

            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <span>&copy; {new Date().getFullYear()} {businessConfig.name}</span>
                    <div className="legal-links">
                        <Link to="/legal/privacy">Privacidad</Link>
                        <Link to="/legal/terms">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
