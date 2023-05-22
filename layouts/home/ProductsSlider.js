import useSWR from 'swr'
import SectionHeading from "@/components/SectionHeading";
import { ProductCard } from "@/components/cards";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function ProductsSlider() {
    const fetcher = (...data) => fetch(...data).then((res) => res.json())
    const { data, isLoading } = useSWR('/api/products', fetcher)

    return (
        <section className='pt-14 sm:pt-20 md:pt-24 lg:pt-36 mb-36'>
            <div className='container'>
                <SectionHeading title="featured" headline="The most downloaded products among our best templates" />
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
    )
}