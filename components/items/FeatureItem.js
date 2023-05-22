export default function FeatureItem({ icon, title }) {
    return (
        <li className='rounded-lg flex items-center gap-2 py-1.5 px-2.5 bg-gray-100'>
            <i className={`${ icon || 'icon-line-shield-check' } text-xl flex-shrink-0 text-primary`}></i>
            <span className='text-xs font-semibold capitalize whitespace-nowrap text-ellipsis overflow-hidden'>{ title || 'W3C Validation Coding' }</span>
        </li>
    )
}