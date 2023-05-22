import Link from "next/link";

export default function Button({ route, icon, text, variant, arrow, className }) {
    return (
        route ?
        <Link href={ route } className={`${ className } flex-shrink-0 inline-flex items-center justify-center gap-2 h-9 px-3 rounded-lg btn-animate text-white ${ variant ? variant : 'bg-primary' }`}>
            <i className={`${ icon || 'icon-paper-plane' } text-sm flex-shrink-0 hidden sm:block lg:hidden xl:block`}></i>
            <span className="sm:text-[11px] text-[10px] leading-4 tracking-wide uppercase font-semibold whitespace-nowrap">{ text || 'contact us' }</span>
            { arrow ? <i className='icon-chevron-down text-[11px] -mt-[3px]'></i> : '' }
        </Link>
        :
        <button type="button" className={`${ className } flex-shrink-0 inline-flex items-center justify-center gap-2 h-9 px-3 rounded-lg btn-animate text-white ${ variant ? variant : 'bg-primary' }`}>
            <i className={`${ icon || 'icon-paper-plane' } text-sm flex-shrink-0 hidden sm:block lg:hidden xl:block`}></i>
            <span className="sm:text-[11px] text-[10px] leading-4 tracking-wide uppercase font-semibold whitespace-nowrap">{ text || 'contact us' }</span>
            { arrow ? <i className='icon-chevron-down text-[11px] -mt-[3px]'></i> : '' }
        </button>
    )
}