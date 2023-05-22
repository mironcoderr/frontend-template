export default function TechnologyItem({ image, title, version }) {
    return (
        <li className='relative flex items-center gap-3 pl-10'>
            <img src={ image || '/images/technologies/react.png' } alt='technologies' className='flex-shrink-0 h-4 absolute top-1/2 -translate-y-1/2 left-0' />
            <span className='flex-auto first-letter:capitalize text-sm font-medium'>{ title || 'react js' }</span>
            <span className='text-sm font-medium'>{ version || '---' }</span>
        </li>
    )
}