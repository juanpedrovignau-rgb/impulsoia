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
        { name: 'Inicio', href: '#home' },
        { name: 'Servicios', href: '#services' },
        { name: 'Nosotros', href: '#about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contacto', href: '#contact' }
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link to="/" className="logo" style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff', letterSpacing: '-1px', zIndex: 1101 }}>
                    {businessConfig.name.split(' ')[0]} <span style={{ color: 'var(--logo-ia-color)', textShadow: '0 0 15px var(--accent-glow)' }}>{businessConfig.name.split(' ').slice(1).join(' ')}</span>
                </Link>

                {/* Hamburger Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="mobile-menu-btn"
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                {item.href.startsWith('#') ? (
                                    <Link
                                        to={`/${item.href}`}
                                        onClick={(e) => {
                                            if (location.pathname === '/') {
                                                e.preventDefault();
                                                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                                            }
                                            setActiveTab(item.href);
                                            closeMenu();
                                        }}
                                        className={`nav-link ${activeTab === item.href ? 'active' : ''}`}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <Link
                                        to={item.href}
                                        onClick={() => {
                                            setActiveTab(item.href);
                                            closeMenu();
                                        }}
                                        className={`nav-link ${location.pathname.startsWith(item.href) ? 'active' : ''}`}
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
