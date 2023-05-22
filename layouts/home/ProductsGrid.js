import useSWR from 'swr'
import { ProductCard } from "@/components/cards";
import SectionHeading from "@/components/SectionHeading";

export default function ProductsGrid() {
    const fetcher = (...data) => fetch(...data).then((res) => res.json())
    const { data, isLoading } = useSWR('/api/products', fetcher)
    
    return (
        <section className='pt-14 sm:pt-20 md:pt-24 lg:pt-36'>
            <div className='container'>
                <SectionHeading title="templates" headline="Developer friendly code and future focused design templates" />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        isLoading ? <p>Loading...</p>
                        :
                        data?.map((product, index) => (
                            <ProductCard 
                                key={ index }
                                data={ product }  
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}