import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { businessConfig } from '../config';

export default function Header() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('#home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    // Close menu on resize if screen becomes large
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setIsMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navItems = [
        { name: 'Inicio', href: '/#home' },
        { name: 'Nosotros', href: '/#about' },
        { name: 'Servicios', href: '/#services' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contacto', href: '/#contact' }
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header style={{
            height: 'var(--header-height)',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: isMenuOpen ? '#000' : 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            transition: 'var(--transition)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link to="/" className="logo" style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff', letterSpacing: '-1px', zIndex: 1101 }}>
                    {businessConfig.name.split(' ')[0]} <span style={{ color: 'var(--logo-ia-color)', textShadow: '0 0 15px var(--accent-glow)' }}>{businessConfig.name.split(' ').slice(1).join(' ')}</span>
                </Link>

                {/* Hamburger Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="mobile-menu-btn"
                    aria-label="Toggle Menu"
                    style={{
                        display: 'none', // Controlled by CSS media queries
                        background: 'transparent',
                        fontSize: '1.5rem',
                        color: '#fff',
                        zIndex: 1101
                    }}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                {item.href.startsWith('/#') ? (
                                    <a
                                        href={item.href}
                                        onClick={() => {
                                            setActiveTab(item.href.replace('/', ''));
                                            setIsMenuOpen(false);
                                        }}
                                        className={`nav-link ${activeTab === item.href.replace('/', '') ? 'active' : ''}`}
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <Link
                                        to={item.href}
                                        onClick={() => {
                                            setActiveTab(item.href);
                                            setIsMenuOpen(false);
                                        }}
                                        className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
