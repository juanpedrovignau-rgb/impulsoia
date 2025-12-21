import { businessConfig } from '../config';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#000', paddingTop: '80px', borderTop: '1px solid #222', color: '#888' }}>
            <div className="container grid-4-cols" style={{ paddingBottom: '60px', borderBottom: '1px solid #222' }}>
                <div style={{ gridColumn: 'span 1' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#fff', marginBottom: '20px' }}>
                        {businessConfig.name.split(' ')[0]} <span style={{ color: 'var(--accent-color)' }}>{businessConfig.name.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
                        {businessConfig.description.split('.')[0]}.
                    </p>
                    <div style={{ fontSize: '0.9rem' }}>
                        📍 {businessConfig.address.split(',')[0]} <br />
                        {businessConfig.locationDetail}
                    </div>
                </div>

                <div style={{ gridColumn: 'span 1' }}>
                    <h4 style={{ color: '#fff', marginBottom: '20px' }}>Nuestros Servicios</h4>
                    <ul style={{ listStyle: 'none', fontSize: '0.9rem', lineHeight: '2' }}>
                        {businessConfig.services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </div>

                <div style={{ gridColumn: 'span 1' }}>
                    <h4 style={{ color: '#fff', marginBottom: '20px' }}>Horarios</h4>
                    <ul style={{ listStyle: 'none', fontSize: '0.9rem', lineHeight: '2' }}>
                        {businessConfig.hours.map((hour, index) => (
                            <li key={index}>{hour.day}: {hour.time}</li>
                        ))}
                    </ul>
                </div>

                <div style={{ gridColumn: 'span 1' }}>
                    <h4 style={{ color: '#fff', marginBottom: '20px' }}>Llamanos</h4>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-color)', marginBottom: '20px' }}>
                        {businessConfig.phone}
                    </div>
                    <button onClick={() => window.open(`https://wa.me/${businessConfig.whatsappNumber}`, '_blank')} className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>Solicitar Presupuesto</button>
                </div>
            </div>

            <div className="container" style={{ padding: '30px 0', textAlign: 'center', fontSize: '0.8rem' }}>
                &copy; {new Date().getFullYear()} {businessConfig.name}. Todos los derechos reservados. Creado con React.
            </div>
        </footer>
    );
}
