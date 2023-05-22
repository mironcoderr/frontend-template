import useSWR from 'swr'
import Head from 'next/head'
import Link from 'next/link';
import CommonLayout from "@/layouts/common/CommonLayout";
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import BreadcrumbMenu from '@/components/breadcrumb/BreadcrumbMenu';
import SpecificCard from '@/components/cards/SpecificCard';
import DetailsCard from '@/components/cards/DetailsCard';
import FeatureItem from '@/components/items/FeatureItem';
import Button from '@/components/buttons/Button';
import PurchaseItem from '@/components/items/PurchaseItem';
import ProductCard from '@/components/cards/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function ProductSingle() {
    const fetcher = (...data) => fetch(...data).then((res) => res.json())
    const { data, isLoading } = useSWR('/api/products', fetcher)

    return (
        <>
            <CommonLayout>
                <section className='pt-28 pb-12 bg-gradient-to-tr from-sky-50 to-violet-50'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                {/* <Breadcrumb className='mb-3' activeRoute='Hotash - React Admin Dashboard Template'>
                                    <BreadcrumbMenu route='/' name="home" />
                                    <BreadcrumbMenu route='/products' name="products" />
                                </Breadcrumb> */}
                                <h3 className='text-2xl mb-3 font-bold capitalize whitespace-nowrap overflow-hidden text-ellipsis'>Hotash - React Admin Dashboard Template</h3>
                                <p className='text-sm font-medium mb-2'>Build with - React - Sass - Bootstrap - Recharts - Context Api</p>
                            </div>
                            <div className='col-12 lg:col-8'>
                                <figure className='rounded-2xl mb-8 p-5 bg-white'>
                                    <img className='w-full rounded-2xl' src='/images/products/hotash.jpg' alt='products' />
                                </figure>
                                <DetailsCard title='introduction' filterBtn>
                                    <div className='grid grid-cols-4 gap-5 p-5'>
                                        <SpecificCard route='#' source='/images/products/hotash/pages/home.jpg' title='home page' />
                                        <SpecificCard route='#' source='/images/products/hotash/pages/inventory-grid.jpg' title='inventory grid page' />
                                        <SpecificCard route='#' source='/images/products/hotash/pages/inventory-list.jpg' title='inventory list page' />
                                        <SpecificCard route='#' source='/images/products/hotash/pages/inventory-single.jpg' title='inventory single page' />
                                        <SpecificCard route='#' source='/images/products/hotash/pages/about.jpg' title='about page' />
                                        <SpecificCard route='#' source='/images/products/hotash/pages/vendor-grid.jpg' title='vendor grid page' />
                                        <SpecificCard route='#' source='/images/products/hotash/pages/vendor-list.jpg' title='vendor list page' />
                                        <SpecificCard route='#' source='/images/products/hotash/pages/vendor-single.jpg' title='vendor single page' />
                                        <SpecificCard route='#' source='/images/products/hotash/pages/blog-grid.jpg' title='blog grid page' />
                                        <SpecificCard route='#' source='/images/products/hotash/pages/blog-list.jpg' title='blog list page' />
                                        <SpecificCard route='#' source='/images/products/hotash/pages/blog-single.jpg' title='blog single page' />
                                        <SpecificCard route='#' source='/images/products/hotash/pages/blog-author.jpg' title='blog author page' />
                                    </div>
                                    <div className='absolute bottom-0 left-0 w-full'>
                                        <span className='w-full h-16 blur bg-white/80'>xsdf</span>
                                        <button type='button' className='uppercase font-bold text-xs tracking-wider w-full h-12 rounded-b-2xl shadow-more text-primary bg-white'>show more content</button>
                                    </div>
                                </DetailsCard>

                                <DetailsCard title='description'>
                                    <p className='p-5 text-sm leading-6'>
                                        What’s more, the template is easy to customize with CSS Variables that means you can frame it exactly the way you want. The Clean & Well Commented Codes will help you to work with it very easily without getting stuck on the way to development journey. Again, some auxiliary yet powerful features are Profile, Settings, Gallery, Pricing, Banners, Testimonail, Faqs, Maintanance , 404, Terms & Comditions, Coming Soon and many more pages, many more apps including Email, eCommerce, Calendar, Projects, Tasks, Supports, Learning, Note, Contact, Calendar & many more.
                                        <span className='mt-7'>The template includes a number of Charts Libraries like Chart Js, Google Charts, Recharts Charts, and Peity Charts. Apart from these, the Dashboard is showered with different mapping options like Google Maps, Openstreet Maps, and Vector Maps. Moreover, here you will find different Icons Libraries such as Unicons, Font Awesome, Line Awesome, and Ant Design Icons.</span>
                                        <span className='mt-7'>Add to that, Multiple Layouts and fully Responsive Design make it fit for devices no matter whether it is a mobile phone or a laptop. It reigns everywhere it goes. Unlimited Template Possibilities and Lifetime Free Updates are the things that will elevate your experience to the whole next level.</span>
                                    </p>
                                </DetailsCard>

                                <DetailsCard title='features'>
                                    <ul className='p-5 w-full grid grid-cols-3 gap-5'>
                                        <FeatureItem icon='icon-line-moon' title='dark & light mode supported' />
                                        <FeatureItem icon='icon-line-range' title='easy to customization' />
                                        <FeatureItem icon='icon-line-code' title='W3C validation code quality' />
                                        <FeatureItem icon='icon-line-rocket' title='SEO friendly coding structure' />
                                        <FeatureItem icon='icon-line-desktop' title='Responsive for all device' />
                                        <FeatureItem icon='icon-line-update' title='Access life time free updates' />
                                        <FeatureItem icon='icon-line-globe' title='Cross Browser Compatible' />
                                        <FeatureItem icon='icon-line-building' title='Creative & Modern Design' />
                                        <FeatureItem icon='icon-line-chats' title='quick reply support message' />
                                    </ul>
                                </DetailsCard>
                                <DetailsCard title='change log'>
                                    <div className='p-5 border-b last:border-none border-gray-100'>
                                        <h4 className='capitalize font-medium text-sm mb-2'>version - 1.0.0</h4>
                                        <ul className='list-disc leading-7 ml-6 text-sm first-letter:capitalize'>
                                            <li>initial release</li>
                                            <li>Fixed ad details responsive issue</li>
                                            <li>Added New Message & Notification Pages</li>
                                            <li>Update 5 page layout redesign. dashboard, profile, ad-post, setting, ad-details</li>
                                            <li>Rewrite of code index page, ad list pages, ad details pages</li>
                                            <li>Fixed ad details responsive issue</li>
                                            <li>Added New Message & Notification Pages</li>
                                        </ul>
                                    </div>
                                    <div className='p-5 border-b last:border-none border-gray-100'>
                                        <h4 className='capitalize font-medium text-sm mb-2'>version - 1.0.1</h4>
                                        <ul className='list-disc leading-7 ml-6 text-sm first-letter:capitalize'>
                                            <li>initial release</li>
                                            <li>Fixed ad details responsive issue</li>
                                            <li>Added New Message & Notification Pages</li>
                                            <li>Update 5 page layout redesign. dashboard, profile, ad-post, setting, ad-details</li>
                                            <li>Rewrite of code index page, ad list pages, ad details pages</li>
                                            <li>Added New Message & Notification Pages</li>
                                            <li>Fixed ad details responsive issue</li>
                                        </ul>
                                    </div>
                                </DetailsCard>
                            </div>
                            <div className='col-12 lg:col-4'>
                                <div className='rounded-2xl p-5 mb-8 bg-white'>
                                    <div className='flex items-center gap-3 mb-4'>
                                        <i className='icon-line-dollers flex-shrink-0 text-3xl'></i>
                                        <h3 className='flex-auto text-sm font-semibold capitalize'>Standard <small className='block font-medium leading-5'>Single Site License</small></h3>
                                        <span className='text-[28px] font-bold'>$24</span>
                                    </div>
                                    <button type='button' className='w-full h-10 mb-4 rounded-lg shadow-xsb flex items-center justify-center gap-2.5 bg-teal-500 text-white btn-animate'>
                                        <i className='icon-bag text-sm leading-none'></i>
                                        <span className='text-xs font-semibold uppercase tracking-wide'>add to cart</span>
                                    </button>
                                    <Link href="#" className='w-full h-10 mb-4 rounded-lg shadow-xsb flex items-center justify-center gap-2 border-2 border-primary text-primary bg-white btn-animate'>
                                        <i className='icon-line-eye text-lg font-medium leading-none'></i>
                                        <span className='text-xs font-semibold uppercase tracking-wide'>live preview</span>
                                    </Link>
                                    <ul className='w-full flex flex-col gap-1 overflow-y-auto'>
                                        <PurchaseItem icon='icon-line-eye' title='total views' describe='3425' />
                                        <PurchaseItem icon='icon-line-download-folder' title='total downloads' describe='3425' />
                                        <PurchaseItem icon='icon-line-squares-3d' title='version' describe='1.0.0' />
                                        <PurchaseItem icon='icon-line-shield-check' title='licence' describe='MIT' />
                                        <PurchaseItem icon='icon-line-swatch' title='category' describe='admin panel' />
                                        <PurchaseItem icon='icon-line-squares' title='variation' describe='react template' />
                                        <PurchaseItem icon='icon-line-desktop' title='layout' describe='responsive' />
                                    </ul>
                                </div>
                                <DetailsCard title='technologies'>
                                    <ul className='p-5 flex flex-col gap-3.5'>
                                        <li className='relative flex items-center gap-3 pl-10'>
                                            <img src='/images/technologies/react.png' alt='technologies' className='flex-shrink-0 h-4 absolute top-1/2 -translate-y-1/2 left-0' />
                                            <span className='flex-auto first-letter:capitalize text-sm font-medium'>react js</span>
                                            <span className='text-sm font-medium'>18.2.0</span>
                                        </li>
                                        <li className='relative flex items-center gap-3 pl-10'>
                                            <img src='/images/technologies/bootstrap.png' alt='technologies' className='flex-shrink-0 h-4 absolute top-1/2 -translate-y-1/2 left-0' />
                                            <span className='flex-auto first-letter:capitalize text-sm font-medium'>bootstrap</span>
                                            <span className='text-sm font-medium'>5.0.2</span>
                                        </li>
                                        <li className='relative flex items-center gap-3 pl-10'>
                                            <img src='/images/technologies/sass.png' alt='technologies' className='flex-shrink-0 h-4 absolute top-1/2 -translate-y-1/2 left-0' />
                                            <span className='flex-auto first-letter:capitalize text-sm font-medium'>sass</span>
                                            <span className='text-sm font-medium'>1.62.1</span>
                                        </li>
                                        <li className='relative flex items-center gap-3 pl-10'>
                                            <img src='/images/technologies/node.png' alt='technologies' className='flex-shrink-0 h-4 absolute top-1/2 -translate-y-1/2 left-0' />
                                            <span className='flex-auto first-letter:capitalize text-sm font-medium'>node js</span>
                                            <span className='text-sm font-medium'>18.16.0</span>
                                        </li>
                                        <li className='relative flex items-center gap-3 pl-10'>
                                            <img src='/images/technologies/chart.png' alt='technologies' className='flex-shrink-0 h-4 absolute top-1/2 -translate-y-1/2 left-0' />
                                            <span className='flex-auto first-letter:capitalize text-sm font-medium'>chart js</span>
                                            <span className='text-sm font-medium'>4.3.0</span>
                                        </li>
                                        <li className='relative flex items-center gap-3 pl-10'>
                                            <img src='/images/technologies/google-fonts.png' alt='technologies' className='flex-shrink-0 h-4 absolute top-1/2 -translate-y-1/2 left-0' />
                                            <span className='flex-auto first-letter:capitalize text-sm font-medium'>google fonts</span>
                                            <span className='text-sm font-medium'>---</span>
                                        </li>
                                        <li className='relative flex items-center gap-3 pl-10'>
                                            <img src='/images/technologies/fontawesome.png' alt='technologies' className='flex-shrink-0 h-4 absolute top-1/2 -translate-y-1/2 left-0' />
                                            <span className='flex-auto first-letter:capitalize text-sm font-medium'>fontawesome</span>
                                            <span className='text-sm font-medium'>6.4.0</span>
                                        </li>
                                    </ul>
                                </DetailsCard>
                                <DetailsCard title="featured items">
                                    <div className='p-5'>
                                        {
                                            isLoading ? <p>Loading...</p>
                                            :
                                            data?.slice(0, 6).map((product, index) => (
                                                <ProductCard 
                                                    key={ index }
                                                    data={ product } 
                                                    className="mb-5 pb-4 border-b border-gray-100 last:mb-0 last:pb-0 last:border-none" 
                                                />
                                            ))
                                        }
                                    </div>
                                </DetailsCard>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='py-20'>
                    <div className='container'>
                        <div className='flex items-center justify-between gap-5 mb-10'>
                            <h3>
                                <span className='text-2xl font-bold capitalize mb-1'>related templates</span>
                                <span className='text-sm font-medium block text-paragraph'>You will find this more related templates here</span>
                            </h3>
                            <Button route="/products" icon="icon-solid-circle-plus" text="all templates" />
                        </div>
                        <Swiper
                            navigation={true} 
                            modules={[Navigation]}
                            className="feature-swiper"
                            breakpoints={{
                                0: { slidesPerView: 'auto', spaceBetween: 20 },
                                768: { slidesPerView: 2, spaceBetween: 30 },
                                1024: { slidesPerView: 3, spaceBetween: 40 },
                            }}
                        >
                            {
                                isLoading ? <p>Loading...</p>
                                :
                                data?.filter(item => item.isFeatured)?.map((product, index) => (
                                    <SwiperSlide key={ index }>
                                        <ProductCard data={ product } />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </section>
            </CommonLayout>
        </>
    )
}
