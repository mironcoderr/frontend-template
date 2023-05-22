import useSWR from 'swr';
import { ReviewCard } from "@/components/cards";
import SectionHeading from "@/components/SectionHeading";

export default function Reviews() {
    const fetcher = (...data) => fetch(...data).then((res) => res.json());
    const { data, isLoading } = useSWR('/api/reviews', fetcher);

    return (
        isLoading ? <p>loading...</p>
        :
        <section className='pt-14 sm:pt-20 md:pt-24 lg:pt-36'>
            <div className='container'>
                <SectionHeading title="testimonials" headline="Some excellent feedback from clients on our products & services" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    <div className='space-y-8'>
                        {data.slice(3, 6).map((review, index)=> (
                            <ReviewCard
                                key={index}
                                quote={review.quote}
                                platform={review.platform}
                                variant={review.variant} 
                                client={review.client}
                                product={review.product}
                                url={review.url}
                            />
                        ))}
                    </div>
                    <div className='space-y-8'>
                        {data.slice(0, 3).map((review, index)=> (
                            <ReviewCard
                                key={index}
                                quote={review.quote}
                                platform={review.platform}
                                variant={review.variant} 
                                client={review.client}
                                product={review.product}
                                url={review.url}
                            />
                        ))}
                    </div>
                    <div className='space-y-8 sm:hidden lg:block'>
                        {data.slice(6, 9).map((review, index)=> (
                            <ReviewCard
                                key={index}
                                quote={review.quote}
                                platform={review.platform}
                                variant={review.variant} 
                                client={review.client}
                                product={review.product}
                                url={review.url}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}