import Link from 'next/link';

export default function SpecificCard({ source, route, title }) {
    return (
        <div className='shadow-card rounded-lg group'>
            <figure className='relative'>
                <img className='w-full rounded-t-lg' src={ source } alt='specification' />
                <div className='absolute inset-0 flex items-center justify-center rounded-t-lg bg-primary/50 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible'>
                    <Link href={ route } className='flex items-center justify-center gap-2 py-1.5 px-3 -mt-5 rounded-lg text-white bg-secondary/90 transition-all duration-300 group-hover:-mt-0'>
                        <i className='icon-eye-regular text-sm'></i>
                        <span className='uppercase font-medium text-[11px] tracking-wide'>live demo</span>
                    </Link>
                </div>
            </figure>
            <h5 className='text-xs font-semibold capitalize text-center py-4'>{ title }</h5>
        </div>
    )
}