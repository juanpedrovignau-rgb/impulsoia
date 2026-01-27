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

    // Schema.org JSON-LD for BlogPosting (if it's an article)
    const articleSchema = article ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "image": [seoImage],
        "datePublished": date,
        "dateModified": date, // Ideally this would be updatedDate
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
            {article && (
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
            )}
        </Helmet>
    );
}
