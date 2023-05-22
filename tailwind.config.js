/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': {'max': '640px'},
                'mobile': {'min': '0px', 'max': '640px'},
                'tablet': {'min': '641px', 'max': '767px'},
                'laptop': {'min': '768px', 'max': '1024px'},
                'desktop': {'min': '1025px', 'max': '1280px'},
                'monitor': {'min': '1281px', 'max': '1536px'},
            },
            fontFamily: {
                "mont": ["Montserrat", "sans-serif"],
                "awesome": ["'Font Awesome 6 Free'"],
                "iconly": ['"Iconly"'],
            },
            backgroundImage: {
                'hero-banner': "url('/images/assets.png')",
                'offer': "url('/images/pattern/01.jpg')",
            },
            boxShadow: {
                'xst': '0px -8px 16px 0px rgba(0, 0, 0, 0.04)',
                'xsb': '0px 8px 16px 0px rgba(0, 0, 0, 0.04)',
                'xsr': '8px 0px 16px 0px rgba(0, 0, 0, 0.04)',
                'xsl': '-8px 0px 16px 0px rgba(0, 0, 0, 0.04)',
                'paper': '0px 4px 40px rgba(23, 31, 70, 0.16)',
                'card': '0px 10px 20px rgba(25 , 24 , 67, 0.1)',
                'more': '0px -18px 32px 0px rgba(0, 0, 0, 0.1)',
            },
            lineHeight: {
                '11': '2.75rem',
                '12': '3rem',
            },
            colors: {
                envato: "#79B34C",
                fiverr: "#00b22d",
                miron: "#fe6347",
                primary: "#2563eb",
                secondary: "#1F1F39",
                heading: "#0f172a",
                paragraph: "#334155",
                instagram: "#F77737",
                facebook: '#4267B2',
                linkedin: '#0077B5',
                twitter: '#1DA1F2',
                youtube: '#FF0000',
                html: '#FF5733',
                react: '#00d8ff',
            }
        },
    },
    plugins: [],
}