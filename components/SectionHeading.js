export default function SectionHeading({title, headline}) {
    return (
        <div className='text-center mb-10 sm:mb-14'>
            <span className='text-sm sm:text-base block uppercase tracking-[3px] font-semibold mb-4 text-primary'>{ title }</span>
            <h2 className='text-2xl max-w-md sm:text-4xl sm:max-w-2xl mx-auto font-semibold text-heading'>{ headline }</h2>
        </div>
    )
}