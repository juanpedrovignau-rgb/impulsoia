import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import VideoBackground from '../components/VideoBackground';
import SEO from '../components/SEO';
import { businessConfig } from '../config';

export default function LegalPage() {
    const { type } = useParams(); // 'privacy' or 'terms'

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [type]);

    const isPrivacy = type === 'privacy';
    const title = isPrivacy ? 'Política de Privacidad' : 'Términos y Condiciones';

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', paddingBottom: '100px', color: '#fff' }}>
            <SEO
                title={`${title} | ${businessConfig.name}`}
                description={`Información legal sobre ${title} de Impulso IA.`}
            />

            <div style={{ position: 'relative', padding: '160px 0 80px', textAlign: 'center', overflow: 'hidden' }}>
                <VideoBackground overlayOpacity={0.9} />
                <div className="container" style={{ position: 'relative', zIndex: 5 }}>
                    <h1 className="section-title-large" style={{ fontSize: '3.5rem', fontWeight: '900' }}>{title}</h1>
                </div>
            </div>

            <div className="container" style={{ maxWidth: '800px', marginTop: '40px' }}>
                <div className="glass-card" style={{ padding: '40px', lineHeight: '1.8', color: 'var(--text-secondary)', fontWeight: '300' }}>
                    {isPrivacy ? (
                        <div className="legal-content">
                            <p>Última actualización: 08 de Enero, 2026</p>
                            <h2>1. Recopilación de Información</h2>
                            <p>En {businessConfig.name}, valoramos su privacidad. Recopilamos información que usted nos proporciona voluntariamente a través de nuestros formularios de contacto, incluyendo su nombre, correo electrónico y número de teléfono.</p>

                            <h2>2. Uso de la Información</h2>
                            <p>La información recopilada se utiliza exclusivamente para:
                                <ul>
                                    <li>Contactarlo en relación con sus consultas.</li>
                                    <li>Mejorar nuestros servicios de Inteligencia Artificial.</li>
                                    <li>Enviar comunicaciones promocionales (solo si usted ha dado su consentimiento).</li>
                                </ul>
                            </p>

                            <h2>3. Galletas (Cookies)</h2>
                            <p>Utilizamos cookies para mejorar su experiencia de navegación y analizar el tráfico del sitio mediante herramientas como Google Analytics y Facebook Pixel. No utilizamos cookies para recopilar información de identificación personal sin su permiso.</p>

                            <h2>4. Publicidad de Terceros</h2>
                            <p>Este sitio puede mostrar anuncios de Google AdSense. Google utiliza cookies para publicar anuncios basados en sus visitas previas a este y otros sitios web. Puede optar por no recibir publicidad personalizada visitando la Configuración de anuncios de Google.</p>

                            <h2>5. Contacto</h2>
                            <p>Si tiene preguntas sobre esta política, contáctenos en {businessConfig.email}.</p>
                        </div>
                    ) : (
                        <div className="legal-content">
                            <p>Última actualización: 08 de Enero, 2026</p>
                            <h2>1. Aceptación de Términos</h2>
                            <p>Al acceder a https://impulsoia.cloud, usted acepta estar sujeto a estos términos de servicio y cumplir con todas las leyes y regulaciones aplicables.</p>

                            <h2>2. Licencia de Uso</h2>
                            <p>Se concede permiso para descargar temporalmente una copia de los materiales en el sitio web de {businessConfig.name} para visualización transitoria personal y no comercial solamente.</p>

                            <h2>3. Exención de Responsabilidad</h2>
                            <p>Los materiales en el sitio web de {businessConfig.name} se proporcionan "tal cual". {businessConfig.name} no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías.</p>

                            <h2>4. Limitaciones</h2>
                            <p>En ningún caso {businessConfig.name} o sus proveedores serán responsables de cualquier daño surgido del uso o la imposibilidad de usar los materiales en su sitio web.</p>

                            <h2>5. Modificaciones</h2>
                            <p>{businessConfig.name} puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso.</p>
                        </div>
                    )}
                    <div style={{ marginTop: '50px', textAlign: 'center' }}>
                        <Link to="/" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>&larr; Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
