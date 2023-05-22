export default function handler(req, res) {
    res.status(200).json(
        {
            headers: [
                { name: 'home', route: '/' },
                { name: 'products', route: '#products' },
                { name: 'technologies', route: '#technologies' },
                { name: 'reviews', route: '#reviews' },
                { name: 'support', route: '#support' },
                { name: 'faqs', route: '#faqs' },
            ],
            accounts: [
                { name: 'profile', route: '/profile' },
                { name: 'change password', route: '/change-password' },
                { name: 'downloads', route: '/downloads' },
                { name: 'transactions', route: '/transactions' },
                { name: 'logout', route: '/login' },
            ],
            footers: [
                { name: 'refund & exchange', route: '/refunds' },
                { name: 'custom development', route: '/customs' },
                { name: 'documentation', route: '/docs' },
                { name: 'contact us', route: '/contact' },
                { name: 'cookie setting', route: '/cookies' },
                { name: 'terms & conditionsg', route: '/terms' },
                { name: 'privacy policy', route: '/privacy' },
                { name: 'about us', route: '/about' },
            ],
        }
    )
}