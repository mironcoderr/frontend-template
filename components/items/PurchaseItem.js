export default function PurchaseItem({ icon, title, describe }) {
    return (
        <li className='flex items-center gap-3'>
            <i className={`${ icon || 'icon-line-eye' } flex-shrink-0 text-lg`}></i>
            <span className='flex-auto text-xs font-medium capitalize'>{ title || 'total views' }</span>
            <span className='text-xs font-medium capitalize'>{ describe || '3425' }</span>
        </li>
    )
}