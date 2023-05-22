import Link from 'next/link'
import { useTypewriter } from 'react-simple-typewriter'

export default function Banner() {
    const [typeText] = useTypewriter({
        words: ['Next js', 'React js', 'Vue js', 'Html'],
        loop: 0,
    })
    return (
        <section className='bg-gradient-to-r from-rose-50 to-teal-50'>
            <div className='lg:pt-44 md:pt-40 sm:pt-36 pt-28 bg-hero-banner bg-no-repeat bg-cover bg-[center_top_70px] text-center relative z-10'>
                <div className='container'>
                    <h1 className='lg:max-w-4xl lg:text-5xl lg:leading-[58px] md:max-w-3xl md:text-[40px] md:leading-[50px] sm:max-w-xl w-full mx-auto max-w-xs text-3xl font-extrabold first-letter:capitalize mb-5 text-heading'>
                        looking for <span className='text-primary'>{ typeText }</span> templates for professional feelings?
                    </h1>
                    <p className='max-w-[850px] mx-auto mb-12 text-paragraph'>Helping design and develop your website or application frontend part with your demand by Html, React, Vue, Angualar and many others frontend technology. You must check our frontend templates on themeforest and frontend service on fiverr. Click the any of button below.</p>
                    <Link href='/products' className='inline-flex items-center text-sm font-semibold capitalize gap-1.5 py-3 px-5 tracking-wide rounded-lg shadow-md text-white bg-primary hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-105 duration-300'>browse templates</Link>
                </div>
                <img src='images/hero.png' alt='hero' className='w-full lg:-mt-40 md:-mt-24 sm:-mt-16 -mt-10 -z-10 relative' />
            </div>
        </section>
    )
}