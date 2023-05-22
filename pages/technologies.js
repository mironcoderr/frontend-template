import useSWR from 'swr'
import CommonLayout from "@/layouts/common/CommonLayout";
import SectionHeading from '@/components/SectionHeading';

export default function Technologies() {
    const fetcher = (...data) => fetch(...data).then((res) => res.json());
    const { data, isLoading } = useSWR('/api/technologies', fetcher);

    return (
        <CommonLayout>
            <section className="pt-28 pb-20">
                <div className="container max-w-6xl">
                    <SectionHeading 
                        title="technologies" 
                        headline="Our modern & rich frontend tech choice will help you to grow" 
                    />
                    <div className='grid grid-cols-5 gap-10'>
                        {data?.map((techno, index) => (
                            <div key={index} className="text-center group">
                                <figure className='w-full py-12 rounded-3xl sm:rounded-[35px] flex items-center justify-center mb-4 duration-300 bg-primary/5 group-hover:shadow-lg'>
                                    <img src={`images/technologies/${techno.file}.png`} alt='technology' className='h-10 sm:h-16' />
                                </figure>
                                <h3 className='capitalize text-sm sm:text-base font-semibold text-heading'>{techno.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </CommonLayout>
    )
}