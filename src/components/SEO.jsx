import React, { useEffect } from 'react';
import { businessConfig } from '../config';

const SEO = ({ title, description, keywords, ogImage, postData }) => {
    useEffect(() => {
        // Update document title
        document.title = title || businessConfig.seo.title;

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = description || businessConfig.seo.description;

        // Update Open Graph Image
        let metaOgImage = document.querySelector('meta[property="og:image"]');
        if (!metaOgImage) {
            metaOgImage = document.createElement('meta');
            metaOgImage.setAttribute('property', 'og:image');
            document.head.appendChild(metaOgImage);
        }
        metaOgImage.content = ogImage || (postData ? postData.image : window.location.origin + businessConfig.hero.image);

        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = keywords || businessConfig.seo.keywords;

        // Structured Data (JSON-LD) for SEOIA
        let script = document.getElementById('seo-jsonld');
        if (script) script.remove();

        const schemaData = postData ? {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": postData.title,
            "image": postData.image,
            "datePublished": postData.date,
            "author": {
                "@type": "Organization",
                "name": businessConfig.name
            },
            "publisher": {
                "@type": "Organization",
                "name": businessConfig.name,
                "logo": {
                    "@type": "ImageObject",
                    "url": window.location.origin + "/favicon.ico"
                }
            },
            "description": postData.excerpt
        } : {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": businessConfig.name,
            "image": window.location.origin + businessConfig.hero.image,
            "@id": window.location.origin,
            "url": window.location.origin,
            "telephone": businessConfig.whatsappNumber,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": businessConfig.address,
                "addressLocality": "Buenos Aires",
                "addressCountry": "AR"
            }
        };

        const newScript = document.createElement('script');
        newScript.id = 'seo-jsonld';
        newScript.type = 'application/ld+json';
        newScript.text = JSON.stringify(schemaData);
        document.head.appendChild(newScript);

        return () => {
            if (newScript) newScript.remove();
        };
    }, [title, description, keywords, ogImage, postData]);

    return null;
};

export default SEO;
