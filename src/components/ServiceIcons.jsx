import React from 'react';

// SVG Icon Components with Gradients and Animations

export const SalesAgentIcon = () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="salesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00CED1" />
                <stop offset="100%" stopColor="#FFC107" />
            </linearGradient>
        </defs>
        {/* Dashboard Base */}
        <rect x="10" y="20" width="60" height="45" rx="4" fill="url(#salesGradient)" opacity="0.2" />
        {/* Rising Graph */}
        <polyline points="20,50 30,45 40,35 50,30 60,20" stroke="url(#salesGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Data Points */}
        <circle cx="20" cy="50" r="3" fill="#00CED1" />
        <circle cx="30" cy="45" r="3" fill="#00CED1" />
        <circle cx="40" cy="35" r="3" fill="#00CED1" />
        <circle cx="50" cy="30" r="3" fill="#FFC107" />
        <circle cx="60" cy="20" r="4" fill="#FFC107">
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
        </circle>
    </svg>
);

export const AssistantIcon = () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="assistantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00CED1" />
                <stop offset="100%" stopColor="#FFC107" />
            </linearGradient>
        </defs>
        {/* Robot Head */}
        <rect x="25" y="25" width="30" height="30" rx="8" fill="url(#assistantGradient)" opacity="0.3" />
        {/* Brain/Circuit */}
        <path d="M35 35 Q40 30 45 35 Q50 40 45 45 Q40 50 35 45 Q30 40 35 35" fill="#00CED1" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </path>
        {/* Task Cards Floating */}
        <rect x="15" y="15" width="12" height="8" rx="2" fill="#FFC107" opacity="0.7">
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="53" y="20" width="12" height="8" rx="2" fill="#00CED1" opacity="0.7">
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-2; 0,0" dur="2.5s" repeatCount="indefinite" />
        </rect>
    </svg>
);

export const InvoiceIcon = () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="invoiceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00CED1" />
                <stop offset="100%" stopColor="#FFC107" />
            </linearGradient>
        </defs>
        {/* Document Stack */}
        <rect x="25" y="20" width="30" height="40" rx="3" fill="url(#invoiceGradient)" opacity="0.2" />
        <rect x="28" y="23" width="30" height="40" rx="3" fill="url(#invoiceGradient)" opacity="0.3" />
        <rect x="31" y="26" width="30" height="40" rx="3" fill="url(#invoiceGradient)" opacity="0.4" />
        {/* Scanning Beam */}
        <rect x="20" y="35" width="40" height="2" fill="#00CED1" opacity="0.8">
            <animate attributeName="y" values="30;55;30" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
        </rect>
        {/* Checkmark */}
        <path d="M50 45 L55 50 L65 35" stroke="#FFC107" strokeWidth="3" fill="none" strokeLinecap="round">
            <animate attributeName="stroke-dasharray" values="0,100; 100,0" dur="2s" repeatCount="indefinite" />
        </path>
    </svg>
);

export const ConsultingIcon = () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="consultingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00CED1" />
                <stop offset="100%" stopColor="#FFC107" />
            </linearGradient>
        </defs>
        {/* Brain/Strategy Center */}
        <circle cx="40" cy="35" r="15" fill="url(#consultingGradient)" opacity="0.3" />
        {/* Roadmap Path */}
        <path d="M20 55 L30 50 L40 52 L50 48 L60 50" stroke="url(#consultingGradient)" strokeWidth="3" fill="none" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
        </path>
        {/* Milestone Markers */}
        <circle cx="20" cy="55" r="3" fill="#00CED1" />
        <circle cx="40" cy="52" r="3" fill="#00CED1" />
        <circle cx="60" cy="50" r="4" fill="#FFC107">
            <animate attributeName="r" values="4;5;4" dur="1.5s" repeatCount="indefinite" />
        </circle>
    </svg>
);

export const AutomationIcon = () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="automationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00CED1" />
                <stop offset="100%" stopColor="#FFC107" />
            </linearGradient>
        </defs>
        {/* Gears */}
        <circle cx="30" cy="40" r="12" fill="none" stroke="url(#automationGradient)" strokeWidth="3">
            <animateTransform attributeName="transform" type="rotate" from="0 30 40" to="360 30 40" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="40" r="12" fill="none" stroke="url(#automationGradient)" strokeWidth="3">
            <animateTransform attributeName="transform" type="rotate" from="0 50 40" to="-360 50 40" dur="4s" repeatCount="indefinite" />
        </circle>
        {/* Gear Teeth */}
        <rect x="28" y="25" width="4" height="6" fill="#00CED1" />
        <rect x="48" y="25" width="4" height="6" fill="#FFC107" />
    </svg>
);

export const ChatbotIcon = () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="chatbotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00CED1" />
                <stop offset="100%" stopColor="#FFC107" />
            </linearGradient>
        </defs>
        {/* Chat Bubbles */}
        <rect x="15" y="25" width="30" height="20" rx="10" fill="url(#chatbotGradient)" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="35" y="45" width="30" height="20" rx="10" fill="url(#chatbotGradient)" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </rect>
        {/* 24/7 Clock */}
        <circle cx="55" cy="25" r="8" stroke="#FFC107" strokeWidth="2" fill="none" />
        <line x1="55" y1="25" x2="55" y2="20" stroke="#FFC107" strokeWidth="2" />
        <line x1="55" y1="25" x2="59" y2="25" stroke="#00CED1" strokeWidth="2">
            <animateTransform attributeName="transform" type="rotate" from="0 55 25" to="360 55 25" dur="3s" repeatCount="indefinite" />
        </line>
    </svg>
);

export const WebsiteIcon = () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="websiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00CED1" />
                <stop offset="100%" stopColor="#FFC107" />
            </linearGradient>
        </defs>
        {/* Browser Window */}
        <rect x="15" y="20" width="50" height="40" rx="4" stroke="url(#websiteGradient)" strokeWidth="2" fill="url(#websiteGradient)" opacity="0.1" />
        <line x1="15" y1="30" x2="65" y2="30" stroke="url(#websiteGradient)" strokeWidth="2" />
        {/* Three dots (browser buttons) */}
        <circle cx="22" cy="25" r="2" fill="#00CED1" />
        <circle cx="28" cy="25" r="2" fill="#00CED1" />
        <circle cx="34" cy="25" r="2" fill="#FFC107" />
        {/* Abstract Website Content (Blocks) */}
        <rect x="20" y="35" width="40" height="4" rx="1" fill="#00CED1" opacity="0.6">
            <animate attributeName="width" values="10;40;10" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="20" y="45" width="25" height="10" rx="2" fill="#FFC107" opacity="0.4" />
        <rect x="48" y="45" width="12" height="10" rx="2" fill="#00CED1" opacity="0.4" />
        {/* Magic Wand/Cursor */}
        <path d="M55 55 L70 40" stroke="url(#websiteGradient)" strokeWidth="2" strokeLinecap="round">
            <animateTransform attributeName="transform" type="translate" values="0,0; -5,5; 0,0" dur="3s" repeatCount="indefinite" />
        </path>
        <circle cx="70" cy="40" r="3" fill="#FFC107">
            <animate attributeName="r" values="3;5;3" dur="1s" repeatCount="indefinite" />
        </circle>
    </svg>
);
