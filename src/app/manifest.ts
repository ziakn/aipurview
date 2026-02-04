import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'AIPurview | AI Security Boutique',
        short_name: 'AIPurview',
        description: 'Premium AI Security & Governance Boutique. Securing the intelligence that powers your enterprise.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0A0B10',
        theme_color: '#00C2FF',
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
