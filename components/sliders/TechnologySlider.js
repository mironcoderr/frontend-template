import useSWR from 'swr'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";

export default function TechnologySlider() {
    const fetcher = (...data) => fetch(...data).then((res) => res.json());
    const { data, isLoading } = useSWR('/api/technologies', fetcher);

    return (
        isLoading ? <p>Loading...</p>
        :
        <Swiper
            grid={{ rows: 2 }}
            spaceBetween={50}
            grabCursor
            pagination={{ clickable: true }}
            breakpoints={{
                0: { slidesPerView: 'auto', spaceBetween: 24 },
                640: { slidesPerView: 4 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 6 },
                1280: { slidesPerView: 7 },
            }}
            modules={[Grid, Pagination]}
            className="techno-swiper w-full h-[360px] sm:h-[470px] !pb-8 sm:!pb-16 mx-auto"
        >
            {data.map((techno, index) => (
                <SwiperSlide key={index} className="xs:!w-24 !h-[calc((100%_-_50px)_/_2)] text-center group">
                    <figure className='w-full h-[calc(100%_-_40px)] rounded-3xl sm:rounded-[35px] flex items-center justify-center mb-4 duration-300 bg-primary/5 group-hover:shadow-lg'>
                        <img src={`images/technologies/${techno.file}.png`} alt='technology' className='h-10 sm:h-14' />
                    </figure>
                    <h3 className='capitalize text-sm sm:text-base font-semibold text-heading'>{techno.name}</h3>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}