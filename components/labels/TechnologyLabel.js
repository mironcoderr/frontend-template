export default function TechnologyLabel({ identity, title }) {
    return (
        <label htmlFor={`${ identity || 'html' }-filter`} className='group relative flex items-center gap-3 pl-9 cursor-pointer'>
            <img src={`/images/technologies/${ identity || 'html' }.png`} alt='technologies' className='flex-shrink-0 h-4 absolute top-1/2 -translate-y-1/2 left-0' />
            <span className='flex-auto first-letter:capitalize text-sm font-medium transition-all duration-300 group-hover:text-primary'>{ title || 'html' }</span>
            <input type="checkbox" id={`${ identity || 'html' }-filter`} className='custom-checkbox' />
        </label>
    )
}