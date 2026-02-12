import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { businessConfig } from '../config';

export default function SEO({ title, description, keywords, image, article, date }) {
    const location = useLocation();
    const siteUrl = 'https://impulsoia.cloud';
    const currentUrl = `${siteUrl}${location.pathname}`;
    const defaultImage = `${siteUrl}${businessConfig.hero.image}`;

    const seoTitle = title ? `${title} | ${businessConfig.name}` : businessConfig.seo.title;
    const seoDescription = description || businessConfig.seo.description;
    const seoKeywords = keywords || businessConfig.seo.keywords;
    const seoImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

    // Schema.org JSON-LD for Organization
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": businessConfig.name,
        "url": siteUrl,
        "logo": `${siteUrl}/vite.svg`,
        "description": businessConfig.description,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": businessConfig.phone || `+${businessConfig.whatsappNumber}`,
            "contactType": "sales",
            "areaServed": "Global",
            "availableLanguage": "Spanish"
        },
        "sameAs": [
            businessConfig.social.instagram,
            businessConfig.social.facebook
        ]
    };

    // Schema.org for the Website
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": businessConfig.name,
        "url": siteUrl,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/blog?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    // Schema.org for AI Services (combining SoftwareApplication and Service)
    const softwareSchema = businessConfig.services.map(s => ({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": s.title,
        "serviceType": "Inteligencia Artificial y Automatización",
        "description": s.description,
        "provider": {
            "@type": "Organization",
            "name": businessConfig.name
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": s.badge,
            "itemListElement": s.benefits?.map(b => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": b
                }
            }))
        }
    }));

    // Schema.org for Videos (Key for SEOAI visibility)
    const videoSchema = [
        {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Agente de Ventas IA y CRM",
            "description": "Demostración de agentes de IA integrados con CRM para optimización de ventas.",
            "thumbnailUrl": [`${siteUrl}${businessConfig.hero.image}`],
            "uploadDate": "2026-01-27T08:00:00+08:00",
            "contentUrl": `${siteUrl}/services-bg.mp4`
        },
        {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Chatbot WhatsApp IA",
            "description": "Automatización de interacciones de clientes vía WhatsApp con Inteligencia Artificial.",
            "thumbnailUrl": [`${siteUrl}${businessConfig.hero.image}`],
            "uploadDate": "2026-01-27T08:00:00+08:00",
            "contentUrl": `${siteUrl}/chatbot-whatsapp.mp4`
        }
    ];

    // Breadcrumbs
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": siteUrl
            },
            ...(location.pathname.includes('/blog') ? [{
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${siteUrl}/blog`
            }] : []),
            ...(article ? [{
                "@type": "ListItem",
                "position": 3,
                "name": title,
                "item": currentUrl
            }] : [])
        ]
    };

    // Schema.org for FAQ
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Qué es un Agente de IA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Un agente de IA es una entidad de software autónoma capaz de razonar, planificar y ejecutar tareas complejas para optimizar procesos de negocio."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cómo ayuda la IA a mi empresa?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La IA permite automatizar tareas repetitivas, mejorar la atención al cliente 24/7 y generar análisis predictivos para la toma de decisiones significativas."
                }
            },
            {
                "@type": "Question",
                "name": "¿Por qué elegir Impulso IA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Impulso IA ofrece arquitecturas inteligentes personalizadas, enfocadas en la rentabilidad y la escalabilidad real del negocio."
                }
            }
        ]
    };

    // Schema.org JSON-LD for BlogPosting
    const articleSchema = article ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "image": [seoImage],
        "datePublished": date,
        "dateModified": date,
        "author": {
            "@type": "Organization",
            "name": businessConfig.name
        },
        "publisher": {
            "@type": "Organization",
            "name": businessConfig.name,
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/vite.svg`
            }
        },
        "description": description
    } : null;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <meta name="keywords" content={seoKeywords} />
            <link rel="canonical" href={currentUrl} />
            <link rel="alternate" hreflang="es" href={currentUrl} />
            <link rel="alternate" hreflang="es-ES" href={currentUrl} />
            <link rel="alternate" hreflang="es-MX" href={currentUrl} />
            <link rel="alternate" hreflang="es-CO" href={currentUrl} />
            <link rel="alternate" hreflang="es-AR" href={currentUrl} />
            <link rel="alternate" hreflang="es-CL" href={currentUrl} />
            <link rel="alternate" hreflang="es-US" href={currentUrl} />
            <link rel="alternate" hreflang="x-default" href={currentUrl} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title || businessConfig.seo.title} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:image" content={seoImage} />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:site_name" content={businessConfig.name} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={title || businessConfig.seo.title} />
            <meta property="twitter:description" content={seoDescription} />
            <meta property="twitter:image" content={seoImage} />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>
            {!article && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
            {article && <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>}
        </Helmet>
    );
}
