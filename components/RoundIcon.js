import Link from "next/link";

export default function RoundIcon({ small, icon, suffix, variant, link }) {
    return (
        link ? 
        <Link href={ link } className='relative'>
            { suffix && <sup className='w-5 h-5 leading-4 absolute -top-1 -right-2 text-center rounded-full text-[10px] font-medium border-2 border-white bg-rose-600 text-white'>{ suffix }</sup> }
            <i className={`${ icon || 'icon-bag' } ${ small ? 'w-7 h-7 leading-7' : 'w-9 h-9 leading-9' } text-sm text-center rounded-full text-white ${ variant || 'bg-primary' }`}></i>
        </Link>
        :
        <button type='button' className='relative'>
            { suffix && <sup className='w-5 h-5 leading-4 absolute -top-1 -right-2 text-center rounded-full text-[10px] font-medium border-2 border-white bg-rose-600 text-white'>{ suffix }</sup> }
            <i className={`${ icon || 'icon-bag' } ${ small ? 'w-7 h-7 leading-7' : 'w-9 h-9 leading-9' } text-sm text-center rounded-full text-white ${ variant || 'bg-primary' }`}></i>
        </button>
    )
}