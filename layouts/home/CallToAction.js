export default function CallToAction() {
    return (
        <section className='mt-16 sm:mt-20 md:mt-24 lg:mt-36'>
            <div className='container'>
                <div className="w-full px-20 py-12 relative isolate rounded-3xl bg-gradient-to-tl from-primary to-violet-900 
                before:content-[''] before:absolute before:inset-0 before:bg-offer before:bg-no-repeat before:bg-cover before:opacity-10 before:-z-10 before:rounded-3xl">
                    <div className="flex items-center justify-between gap-32">
                        <div>
                            <h2 className="text-5xl font-bold first-letter:capitalize mb-6 text-white">need expert help to implement your ideas?</h2>
                            <p className="mb-9 text-white">Our team of experts is standing by to make your custom project a reality. Whether you have a specific idea in mind or need help bringing your vision to life, we're here to help.</p>
                            <a href="#" className="flex-shrink-0 inline-flex items-center gap-2 py-3 px-4 rounded-lg shadow-lg text-primary bg-white transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-[1.02] duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                                </svg>
                                <span className="text-xs leading-4 tracking-wide uppercase font-bold whitespace-nowrap">contact us</span>
                            </a>
                        </div>
                        <img className="flex-shrink-0 w-[380px] drop-shadow-xl" src="images/calltoaction.png" alt="calltoaction" />
                    </div>
                </div>
            </div>
        </section>
    )
}