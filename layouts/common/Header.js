import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/components/Logo';
import Button from '@/components/buttons/Button';
import RoundIcon from '@/components/RoundIcon';
import AccountPaper from '@/components/AccountPaper';

export default function Header() {
    const [scroll, setScroll] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    const router = useRouter();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(scrollY > 80) setScroll(true);
            else setScroll(false);
        })
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-30 transition-[padding] duration-300 ${scroll ? 'bg-white/90 backdrop-blur-md shadow-xsb py-3' : 'py-4'} ${ router.pathname != '/' ? 'bg-gradient-to-r from-rose-50 to-teal-50' : '' }`}>
            <div className="container flex items-center justify-between relative">
                <Logo />
                <div className={`lg:static lg:max-w-none lg:h-auto lg:shadow-none lg:p-0 lg:gap-y-0 lg:overflow-y-visible lg:flex-row lg:flex-auto lg:items-center lg:justify-between lg:translate-x-0 lg:ml-7 lg:mr-4 lg:pl-7 lg:border-l lg:bg-transparent lg:border-primary/10
                    flex flex-col fixed top-0 left-0 w-full max-w-[270px] h-screen p-4 gap-y-6 overflow-y-auto transition-all duration-300 bg-white ${sidebar ? 'shadow-xsr translate-x-0' : 'shadow-none -translate-x-full' }`}>
                    <Button icon="icon-paper-plane" text="contact us" variant="bg-secondary" />
                    <div className='lg:hidden flex items-center justify-between pb-4 border-b border-slate-100'>
                        <Link href="/" className='flex-shrink-0'><Image src="/images/logo.png" alt="frontend-template" width={130} height={40} /></Link>
                        <button type="button" className='flex items-center justify-center w-6 h-6 rounded-full text-rose-500 bg-rose-50' onClick={()=> setSidebar(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col lg:flex-row lg:items-center order-1 lg:order-2">
                        <Link href="/" className="uppercase lg:my-0 lg:py-2 py-3 px-4 my-1 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 text-heading hover:text-primary hover:bg-primary/10">home</Link>
                        <Link href="/products" className="uppercase lg:my-0 lg:py-2 py-3 px-4 my-1 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 text-heading hover:text-primary hover:bg-primary/10">products</Link>
                        <Link href="/technologies" className="uppercase lg:my-0 lg:py-2 py-3 px-4 my-1 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 text-heading hover:text-primary hover:bg-primary/10">technology</Link>
                        <Link href="/reviews" className="uppercase lg:my-0 lg:py-2 py-3 px-4 my-1 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 text-heading hover:text-primary hover:bg-primary/10">reviews</Link>
                        <Link href="/checkout" className="uppercase lg:my-0 lg:py-2 py-3 px-4 my-1 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 text-heading hover:text-primary hover:bg-primary/10">checkout</Link>
                        <Link href="/faqs" className="uppercase lg:my-0 lg:py-2 py-3 px-4 my-1 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 text-heading hover:text-primary hover:bg-primary/10">faqs</Link>
                    </nav>
                </div>
                <div className='flex-shrink-0 flex items-center gap-4 sm:gap-6'>
                    <RoundIcon suffix="1" variant="bg-secondary" />
                    <Button icon='icon-circle-user' text='account' arrow />
                    {/* <AccountPaper /> */}
                </div>
            </div> 
         </header>
    )
}