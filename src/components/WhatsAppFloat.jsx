import React from 'react';
import { businessConfig } from '../config';

export default function WhatsAppFloat() {
    const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios%20de%20IA`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '60px',
                height: '60px',
                backgroundColor: '#25D366',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
                zIndex: 9999,
                transition: 'all 0.3s ease',
                cursor: 'pointer'
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
            }}
            aria-label="Contactar por WhatsApp"
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.488 2.025 7.788L0 32l8.412-2.025A15.935 15.935 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.538 0-4.95-.713-7-1.95l-.5-.3-5.188 1.25 1.25-5.188-.3-.5A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"
                    fill="white"
                />
                <path
                    d="M23.2 19.6c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.3.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.7c-.3 0-.7.1-1.1.5-.4.4-1.5 1.5-1.5 3.6s1.5 4.2 1.7 4.5c.2.3 3 4.6 7.3 6.4 1 .4 1.8.7 2.4.9.1 0 1.9.6 3.6.5 1.1-.1 3.4-1.4 3.9-2.7.5-1.3.5-2.4.3-2.7-.1-.3-.4-.4-.8-.6z"
                    fill="white"
                />
            </svg>
        </a>
    );
}
