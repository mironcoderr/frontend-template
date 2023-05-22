import Logo from '@/components/Logo';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-secondary">
            <a href='#' className='w-12 h-12 mx-auto mb-3 -translate-y-6 rounded-full flex items-center justify-center border-2 border-white text-white bg-primary'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
            </a>
            <div className="container">
                <div className="row">
                    <div className="col-12 md:col-4 mb-6 md:mb-0">
                        <div className="tablet:text-center tablet:mx-auto w-full max-w-xs">
                            <Logo white/>
                            <form className="mt-5 mb-6 block">
                                <label className="mb-3 font-medium text-white">Subscribe to our newsletter</label>
                                <div className="flex w-full h-10 rounded-3xl p-1 bg-white">
                                    <input type="text" placeholder="Your email address" className="w-full h-full pl-3 pr-2" />
                                    <button type="submit" className="text-xs font-semibold capitalize flex-shrink-0 px-3 h-full rounded-3xl bg-primary text-white">Subscribe</button>
                                </div>
                            </form>
                            <nav className="flex flex-wrap items-center gap-4 tablet:justify-center">
                                <Link target='_blank' href='#' className='w-7 h-7 rounded-full flex items-center justify-center shadow bg-facebook transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-105 duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-[14px] h-[14px] fill-white'>
                                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                                    </svg>
                                </Link>
                                <Link target='_blank' href='#' className='w-7 h-7 rounded-full flex items-center justify-center shadow bg-instagram transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-105 duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-[14px] h-[14px] fill-white'>
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                    </svg>
                                </Link>
                                <Link target='_blank' href='#' className='w-7 h-7 rounded-full flex items-center justify-center shadow bg-linkedin transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-105 duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-[14px] h-[14px] fill-white'>
                                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                                    </svg>
                                </Link>
                                <Link target='_blank' href='#' className='w-7 h-7 rounded-full flex items-center justify-center shadow bg-youtube transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-105 duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-[14px] h-[14px] fill-white'>
                                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                                    </svg>
                                </Link>
                                <Link target='_blank' href='#' className='w-7 h-7 rounded-full flex items-center justify-center shadow bg-twitter transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-105 duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-[14px] h-[14px] fill-white'>
                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                                    </svg>
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="col-12 md:col-8">
                        <div className="row">
                            <div className="col-6 sm:col-4 mb-4 sm:mb-0">
                                <h4 className="text-xl font-semibold capitalize mb-6 text-white">Support</h4>
                                <nav className="flex flex-col gap-4">
                                    <a href='#' className="w-fit text-sm capitalize text-white transition-all duration-300 hover:text-primary">Refund & exchange</a>
                                    <a href='#' className="w-fit text-sm capitalize text-white transition-all duration-300 hover:text-primary">Custom development</a>
                                    <a href='#' className="w-fit text-sm capitalize text-white transition-all duration-300 hover:text-primary">documentation</a>
                                    <a href='#' className="w-fit text-sm capitalize text-white transition-all duration-300 hover:text-primary">contact us</a>
                                </nav>
                            </div>
                            <div className="col-6 sm:col-4 mb-4 sm:mb-0">
                                <h4 className="text-xl font-semibold capitalize mb-6 text-white">Legal</h4>
                                <nav className="flex flex-col gap-4">
                                    <a href='#' className="w-fit text-sm capitalize text-white transition-all duration-300 hover:text-primary">Cookie Setting</a>
                                    <a href='#' className="w-fit text-sm capitalize text-white transition-all duration-300 hover:text-primary">Terms & Conditions</a>
                                    <a href='#' className="w-fit text-sm capitalize text-white transition-all duration-300 hover:text-primary">Privacy Policy</a>
                                    <a href='#' className="w-fit text-sm capitalize text-white transition-all duration-300 hover:text-primary">About Us</a>
                                </nav>
                            </div>
                            <div className="col-12 sm:col-4">
                                <h4 className="text-xl font-semibold capitalize mb-6 text-white">Contact</h4>
                                <ul className="flex flex-col gap-5">
                                    <li className="flex gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -mt-0.5 flex-shrink-0 text-white">
                                            <path fillRule="evenodd" d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-white">(+880) 1838 288 389</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -mt-0.5 flex-shrink-0 text-white">
                                            <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                                            <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
                                        </svg>
                                        <span className="text-sm text-white">mironcoder@gmail.com</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -mt-0.5 flex-shrink-0 text-white">
                                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-white">House-A/75, Ward-09, Post-1420, West Jalkuri, Narayanganj, Bangladesh.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4 pb-24 lg:py-4 mt-8 text-center border-t border-white/5">
                <p className="text-xs text-white">© All Rights Reserved by 🧡 Frontend Template.</p>
            </div>
        </footer>
    )
}