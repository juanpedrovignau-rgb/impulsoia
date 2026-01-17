import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Large timeout to ensure the element is rendered, especially when navigating from other pages
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            // If no hash, scroll to top (optional, but good for UX when changing pages)
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, key]);

    return null;
}
