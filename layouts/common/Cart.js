import useSWR from 'swr'
import { ProductCard } from "@/components/cards";

export default function Cart() {
    const fetcher = (...data) => fetch(...data).then((res) => res.json())
    const { data, isLoading } = useSWR('/api/products', fetcher)

    return (
        <div id='cart-sidebar' className="fixed inset-0 w-full z-30 bg-black/50">
            <div className="absolute top-0 right-0 w-full max-w-sm bg-white">
                <div className='relative px-4 py-3 border-b border-gray-100'>
                    <h3 className='text-lg font-semibold capitalize text-center'>total cart (3)</h3>
                    <button type='button' className='absolute -left-2 top-1/2 -translate-y-1/2'>
                        <i className='icon-xmark text-base w-6 h-6 leading-6 text-center rounded-full bg-white text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white'></i>
                    </button>
                </div>
                <div className="px-4 pb-4 h-[calc(100vh_-_158px)] overflow-y-auto">
                    {
                        isLoading ? <p>Loading...</p>
                        :
                        data?.slice(0, 2).map((product, index) => (
                            <div className='py-5 relative last:border-none border-b border-gray-100'>
                                <button type='button' className='absolute top-3 -left-3 z-10'>
                                    <i className='icon-trash-solid text-xs w-7 h-7 leading-7 text-center rounded-full text-red-600 bg-white'></i>
                                </button>
                                <ProductCard key={ index } data={ product } />
                            </div>
                        ))
                    }
                </div>
                <div className='px-4 pb-5 border-t border-gray-100'>
                    <div className='flex items-center justify-between rounded-lg my-3'>
                        <span className='capitalize text-sm font-semibold'>subtotal</span>
                        <span className='text-sm font-semibold text-green-600'>$54.00</span>
                    </div>
                    <button type='button' className='w-full h-10 rounded-lg flex items-center justify-center gap-3 btn-animate text-white bg-primary hover:bg-secondary'>
                        <i className='icon-cart text-base'></i>
                        <span className='text-sm font-medium'>Procced to Checkout</span>
                    </button>
                </div>
            </div>
        </div>
    )
}