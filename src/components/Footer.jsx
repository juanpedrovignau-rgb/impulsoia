import { businessConfig } from '../config';
import { Link } from 'react-router-dom';

const FOOTER_VIDEO = "/grok-video-85df4f58-361d-4600-a4b3-bd4edf5520f9 (1).mp4";

export default function Footer() {
    return (
        <footer className="footer-section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Video Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.85)',
                    zIndex: 2
                }}></div>
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
                    <source src={FOOTER_VIDEO} type="video/mp4" />
                </video>
            </div>

            {/* Footer Content */}
            <div className="container grid-4-cols footer-grid" style={{ position: 'relative', zIndex: 5 }}>
                <div className="footer-col">
                    <div className="footer-logo">
                        {businessConfig.name.split(' ')[0]} <span>{businessConfig.name.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <p>
                        Diseñando arquitecturas inteligentes globales para empresas de habla hispana y Estados Unidos.
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

            <div className="footer-bottom" style={{ position: 'relative', zIndex: 5 }}>
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
