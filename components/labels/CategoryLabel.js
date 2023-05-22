export default function CategoryLabel({ suffix, title }) {
    return (
        <label htmlFor={`${ title || 'ecommerce' }-filter`} className='group relative flex items-center gap-4 cursor-pointer'>
            <span className='text-[10px] font-medium w-5 h-5 leading-5 text-center tracking-wide rounded-full bg-secondary text-white transition-all duration-300 group-hover:bg-primary'>{ suffix || '03' }</span>
            <span className='flex-auto first-letter:capitalize text-sm font-medium transition-all duration-300 group-hover:text-primary'>{ title || 'ecommerce' }</span>
            <input type="checkbox" id={`${ title || 'ecommerce' }-filter`} className='custom-checkbox' />
        </label>
    )
}