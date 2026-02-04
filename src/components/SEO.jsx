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
            "areaServed": "AR",
            "availableLanguage": "Spanish"
        },
        "sameAs": [
            businessConfig.social.instagram,
            businessConfig.social.facebook
        ]
    };

    // Schema.org for AI Services/Agents (SoftwareApplication)
    const softwareSchema = businessConfig.services.map(s => ({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": s.title,
        "applicationCategory": "BusinessApplication",
        "description": s.description,
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Consultoría personalizada"
        },
        "featureList": s.benefits?.join(', ')
    }));

    // Schema.org for FAQ (Great for AI snippet visibility)
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
                    "text": "La IA permite automatizar tareas repetitivas, mejorar la atención al cliente 24/7 y generar análisis predictivos para la toma de decisiones."
                }
            }
        ]
    };

    // Schema.org JSON-LD for BlogPosting (if it's an article)
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

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title || businessConfig.seo.title} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:image" content={seoImage} />
            <meta property="og:locale" content="es_ES" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={title || businessConfig.seo.title} />
            <meta property="twitter:description" content={seoDescription} />
            <meta property="twitter:image" content={seoImage} />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(softwareSchema)}
            </script>
            {!article && (
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            )}
            {article && (
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
            )}
        </Helmet>
    );
}
