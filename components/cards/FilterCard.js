export default function FilterCard({ children, title }) {
    return (
        <div className='rounded-xl border border-gray-100'>
            <div className='flex items-center justify-between gap-5 p-3.5'>
                <h4 className='capitalize font-semibold whitespace-nowrap overflow-hidden text-ellipsis'>{ title || 'title' }</h4>
                <button type='button' className='icon-line-minus w-5 h-5 leading-5 rounded-full text-center text-heading bg-gray-200'></button>
            </div>
            <form className='px-3.5 py-4 flex flex-col gap-4 border-t border-gray-100'>
                { children }
            </form>
        </div>
    )
}