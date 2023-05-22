import useSWR from 'swr';
import CommonLayout from "@/layouts/common/CommonLayout";
import ProductCard from "@/components/cards/ProductCard";
import TechnologyLabel from '@/components/labels/TechnologyLabel';
import CategoryLabel from '@/components/labels/CategoryLabel';
import FilterCard from '@/components/cards/FilterCard';
import FilterButton from '@/components/buttons/FilterButton';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import BreadcrumbMenu from '@/components/breadcrumb/BreadcrumbMenu';
import Link from 'next/link';

export default function Products() {
    const fetcher = (...data) => fetch(...data).then((res) => res.json())
    const { data, isLoading } = useSWR('/api/products', fetcher)

    return (
        <CommonLayout>
            <section className="pt-32 pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-12 sm:col-3">
                            <div className='row'>
                                <div className='col-12'>
                                    <FilterCard title='categories'>
                                        <CategoryLabel suffix='04' title='ecommerce' />
                                        <CategoryLabel suffix='01' title='admin panel' />
                                        <CategoryLabel suffix='02' title='classified ads' />
                                        <CategoryLabel suffix='01' title='domain hosting' />
                                        <CategoryLabel suffix='01' title='FM Radio' />
                                        <CategoryLabel suffix='01' title='automotive' />
                                        <CategoryLabel suffix='02' title='portfolio' />
                                        <CategoryLabel suffix='01' title='hospital' />
                                        <CategoryLabel suffix='01' title='corporate' />
                                        <CategoryLabel suffix='02' title='agency' />
                                        <CategoryLabel suffix='04' title='food' />
                                    </FilterCard>
                                </div>
                                <div className='col-12'>
                                    <FilterCard title='technologies'>
                                        <TechnologyLabel identity='html' title="html" />
                                        <TechnologyLabel identity='sass' title="sass" />
                                        <TechnologyLabel identity='bootstrap' title="bootstrap" />
                                        <TechnologyLabel identity='tailwindcss' title="tailwindcss" />
                                        <TechnologyLabel identity='vue' title="vue js" />
                                        <TechnologyLabel identity='nuxt' title="nuxt js" />
                                        <TechnologyLabel identity='react' title="react js" />
                                        <TechnologyLabel identity='next' title="next js" />
                                        <TechnologyLabel identity='redux' title="redux" />
                                        <TechnologyLabel identity='ant' title="ant design" />
                                        <TechnologyLabel identity='mui' title="material ui" />
                                        <TechnologyLabel identity='angular' title="angular js" />
                                    </FilterCard>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 sm:col-9">
                            <div className="row">
                                <div className='col-12'>
                                    <div className='px-2'>
                                        <div className='p-4 rounded-xl border border-gray-100'>
                                            <form className='w-full text-center flex flex-col items-center justify-center rounded-xl gap-4 p-10 bg-gray-100'>
                                                <h3 className='text-2xl font-bold capitalize mb-2 text-center'>all templates</h3>
                                                <div className='w-full h-12 max-w-lg shadow-xsb flex items-center gap-3 px-4 rounded-full border-2 border-white bg-white transition-all duration-500 focus-within:border-primary'>
                                                    <button type='submit' className='icon-line-search flex-shrink-0 text-2xl'></button>
                                                    <input type='search' placeholder='Search here...' className='w-full h-full font-medium' />
                                                </div>
                                            </form>
                                            <nav className='flex flex-wrap items-start gap-4 mt-4'>
                                                <FilterButton suffix='04' title='"ecommerce"' />
                                                <FilterButton image='tailwindcss' title='tailwindcss' />
                                                <FilterButton title='multivendor' />
                                                <button className='flex items-center justify-center gap-1.5 rounded-full py-1.5 px-2.5 bg-red-100 text-red-500 btn-animate'>
                                                    <i className='icon-line-trash text-sm font-medium'></i>
                                                    <span className='text-xs font-medium capitalize tracking-wide whitespace-nowrap'>filter clear</span>
                                                </button>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                {
                                    isLoading ? <p>Loading...</p>
                                    :
                                    data?.map((product, index) => (
                                        <div className="col-6">
                                            <ProductCard 
                                                key={ index }
                                                data={ product }
                                                className="px-2 pb-3" 
                                            />
                                        </div>
                                    ))
                                }
                                <div className='col-12'>
                                    <div className='p-4 flex items-center justify-between rounded-xl border border-gray-100'>
                                        <p className='text-sm font-medium'>Showing <b>12</b> of <b>48</b> Results</p>
                                        <nav className='flex items-center gap-2'>
                                            <Link href='#' className='icon-line-chevron-left w-8 h-8 leading-8 text-center rounded-full text-base bg-gray-100 transition-all duration-500 hover:bg-primary hover:text-white'></Link>
                                            <Link href='#' className='w-8 h-8 leading-8 text-center rounded-full text-xs font-semibold bg-gray-100 transition-all duration-500 hover:bg-primary hover:text-white'>1</Link>
                                            <Link href='#' className='w-8 h-8 leading-8 text-center rounded-full text-xs font-semibold bg-gray-100 transition-all duration-500 hover:bg-primary hover:text-white'>2</Link>
                                            <Link href='#' className='w-8 h-8 leading-8 text-center rounded-full text-xs font-semibold bg-gray-100 transition-all duration-500 hover:bg-primary hover:text-white'>3</Link>
                                            <span className='icon-line-ellipsis-horizontal text-base'></span>
                                            <Link href='#' className='w-8 h-8 leading-8 text-center rounded-full text-xs font-semibold bg-gray-100 transition-all duration-500 hover:bg-primary hover:text-white'>48</Link>
                                            <Link href='#' className='icon-line-chevron-right w-8 h-8 leading-8 text-center rounded-full text-base bg-gray-100 transition-all duration-500 hover:bg-primary hover:text-white'></Link>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </CommonLayout>
    )
}