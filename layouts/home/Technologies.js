import SectionHeading from "@/components/SectionHeading";
import TechnologySlider from "@/components/sliders/TechnologySlider";

export default function Technologies() {
    return (
        <section className='pt-16 sm:pt-20 md:pt-24 lg:pt-36'>
            <div className='container'>
                <SectionHeading title="technology" headline="Our modern & rich frontend tech choice will help you to grow" />
                <TechnologySlider />
            </div>
        </section>
    )
}