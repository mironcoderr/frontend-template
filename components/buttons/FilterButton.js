export default function FilterButton({ title, image, suffix }) {
    return (
        <button className='flex items-center rounded-full py-2 px-2 bg-gray-100 btn-animate'>
            { image && <img src={`/images/technologies/${ image }.png`} alt='technology' className='h-3 ml-0.5 mr-2' /> }
            { suffix && <span className='text-[10px] font-medium px-1 h-4 leading-4 mr-2 text-center tracking-wide rounded-full bg-secondary text-white'>{ suffix || '03' }</span> }
            { !image && !suffix && <i className='icon-line-search text-base leading-none mr-1.5'></i> }
            <span className='text-xs font-medium capitalize tracking-wide mr-2 whitespace-nowrap'>{ title || 'ecommerce' }</span>
            <i className='icon-line-circle-cross text-base leading-none text-red-500'></i>
        </button>
    )
}