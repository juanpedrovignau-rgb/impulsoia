import React, { useState } from 'react';
import { businessConfig } from '../config';

export default function Header() {
    const [activeTab, setActiveTab] = useState('#home');

    const navItems = [
        { name: 'Inicio', href: '#home' },
        { name: 'Nosotros', href: '#about' },
        { name: 'Servicios', href: '#services' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contacto', href: '#contact' }
    ];

    return (
        <header style={{
            height: 'var(--header-height)',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo" style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff', letterSpacing: '-1px' }}>
                    {businessConfig.name.split(' ')[0]} <span style={{ color: 'var(--logo-ia-color)', textShadow: '0 0 15px var(--accent-glow)' }}>{businessConfig.name.split(' ').slice(1).join(' ')}</span>
                </div>
                <nav>
                    <ul className="nav-menu" style={{ display: 'flex', listStyle: 'none', gap: '35px', fontWeight: '500' }}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={() => setActiveTab(item.href)}
                                    className={`nav-link ${activeTab === item.href ? 'active' : ''}`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
