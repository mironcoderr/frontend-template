export default function handler(req, res) {
    res.status(200).json(
        [
            { file: 'figma', name: 'figma' },
            { file: 'node', name: 'node js' },
            { file: 'xd', name: 'adobe xd' },
            { file: 'gulp', name: 'gulp js' },
            { file: 'photoshop', name: 'photoshop' },
            { file: 'grunt', name: 'grunt js' },
            { file: 'html', name: 'html' },
            { file: 'react', name: 'react js' },
            { file: 'css', name: 'css' },
            { file: 'next', name: 'next js' },
            { file: 'sass', name: 'sass' },
            { file: 'vue', name: 'vue js' },
            { file: 'bootstrap', name: 'bootstrap' },
            { file: 'nuxt', name: 'nuxt js' },
            { file: 'tailwindcss', name: 'tailwindcss' },
            { file: 'redux', name: 'redux' },
            { file: 'js', name: 'javascript' },
            { file: 'mui', name: 'material ui' },
            { file: 'jquery', name: 'jquery' },
            { file: 'ant', name: 'ant design' },
        ]
    )
}