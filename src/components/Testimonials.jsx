import React, { useState, useEffect, useCallback } from 'react';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Lucas Giardelli",
            role: "CEO TechLogistics",
            comment: "Increíble la implementación de los agentes de IA en nuestra atención al cliente. Redujimos el tiempo de respuesta a segundos. ¡Muy recomendados!"
        },
        {
            name: "Sofia Rodríguez",
            role: "Directora E-commerce",
            comment: "El análisis predictivo que desarrollaron para nuestro stock nos cambió la vida. Ya no perdemos ventas por falta de mercadería. Profesionales de primer nivel."
        },
        {
            name: "Martín Gómez",
            role: "Founder AI Startups",
            comment: "Buscábamos automatizar procesos internos y nos dieron una solución que superó lo que imaginábamos. El equipo es muy capacitado y resolutivo."
        },
        {
            name: "Valeria Conti",
            role: "Directora RRHH",
            comment: "Excelente consultoría estratégica. Nos ayudaron a entender dónde la IA realmente aportaba valor y dónde era solo ruido tecnológico."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);


    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section className="section-padding" style={{ backgroundColor: '#000', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <span className="section-title-small">Testimonios de Éxito</span>
                <h2 className="section-title-large" style={{ marginBottom: '60px' }}>Casos Reales con IA</h2>

                <div className="carousel-container" style={{ position: 'relative', maxWidth: '850px', margin: '0 auto' }}>
                    <div className="carousel-track" style={{
                        display: 'flex',
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                        {testimonials.map((t, i) => (
                            <div key={i} style={{ minWidth: '100%', padding: '0 20px' }}>
                                <div className="glass-card" style={{ padding: '60px 50px', textAlign: 'center', position: 'relative', border: '1px solid rgba(0, 206, 209, 0.1)' }}>
                                    <div style={{ fontSize: '5rem', color: 'var(--accent-color)', opacity: 0.1, position: 'absolute', top: '10px', left: '30px', fontFamily: 'serif' }}>“</div>
                                    <p style={{
                                        fontSize: '1.4rem',
                                        lineHeight: '1.6',
                                        color: '#fff',
                                        marginBottom: '40px',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}>
                                        {t.comment}
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '15px' }}>
                                        {[...Array(5)].map((_, starIndex) => (
                                            <span key={starIndex} style={{ color: 'var(--accent-yellow)', fontSize: '1.2rem' }}>★</span>
                                        ))}
                                    </div>
                                    <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', fontWeight: '900', marginBottom: '5px' }}>{t.name}</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* Dots Navigation */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '40px' }}>
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    backgroundColor: i === currentIndex ? 'var(--accent-color)' : 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'var(--transition)'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
