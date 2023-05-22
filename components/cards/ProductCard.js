import Link from "next/link";

export default function ProductCard({ data, className }) {
    return (
        <div className={`group ${ className }`}>
            <figure className='relative shadow-lg mb-4 rounded-xl'>
                <img src={`/images/products/${ data?.name }.jpg`} alt='products' className='w-full rounded-xl' />
                <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl bg-black/60 transition duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100'>
                    <a target='_blank' href={ data?.urls?.preview } className='capitalize text-xs font-semibold py-2 px-3 rounded-md shadow-xl flex items-center justify-center gap-1 duration-300 bg-white/90 text-heading hover:bg-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>live preview</span>
                    </a>
                    <Link href="/products/product-details" className='capitalize text-xs font-semibold py-2 px-3 rounded-md shadow-xl flex items-center justify-center gap-1 duration-300 bg-white/90 text-heading hover:bg-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                        </svg>
                        <span>view details</span>
                    </Link>
                </div>
                <ul className='absolute -top-1 -right-1 flex -space-x-1'>
                    {data?.categories?.map((category, cateIndex) => (
                        <li key={cateIndex} className='flex-shrink-0 w-[22px] h-[22px] ring-1 ring-slate-100 rounded-full flex items-center justify-center shadow bg-white'>
                            <img src={`/images/technologies/${category}.png`} alt='technology' className='h-3'/>
                        </li>
                    ))}
                </ul>
            </figure>
            <ul className='flex gap-3 mb-2'>
                <li className='flex items-center justify-center gap-1 py-1 px-2 rounded-3xl bg-orange-100 text-orange-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                    </svg>
                    <span className='text-xs font-semibold capitalize whitespace-nowrap'>{ data?.meta?.view } view</span>
                </li>
                <li className='flex items-center justify-center gap-1 py-1 px-2 rounded-3xl bg-purple-100 text-purple-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.25 6a.75.75 0 00-1.5 0v4.94l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V9.75z" clipRule="evenodd" />
                    </svg>
                    <span className='text-xs font-semibold capitalize whitespace-nowrap'>{ data?.meta?.download } download</span>
                </li>
            </ul>
            <h3 className='flex items-center justify-between gap-4 mb-1'>
                <Link href='/products/product-details' className='text-sm font-bold overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-300 hover:text-primary'>{ data?.title }</Link>
                <span className={`text-xs font-bold py-1 px-2 rounded-3xl capitalize ${data?.price == 'free' ? 'text-green-500 bg-green-100' : 'text-rose-500 bg-rose-100'}`}>{ data?.price }</span>
            </h3>
            <p className='overflow-hidden text-xs font-medium text-ellipsis whitespace-nowrap w-[calc(100%_-_15%)]'>{ data?.text }</p>
        </div>
    )
}
