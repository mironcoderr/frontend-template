import DropdownButton from "../buttons/DropdownButton";
import FilterIcon from "../icons/FilterIcon";

export default function DetailsCard({ children, title, filterBtn, className }) {
    return (
        <div className={`${ className } relative rounded-2xl mb-8 bg-white`}>
            <div className='px-5 py-4 flex flex-wrap items-center justify-between gap-5'>
                <h4 className='font-semibold capitalize'>{ title }</h4>
                <nav className='flex flex-wrap items-center gap-3'>
                    {
                        filterBtn &&
                        <>
                            <DropdownButton btnName='blocks' btnBG='bg-purple-100' defaultBG='bg-purple-600' defaultColor='text-purple-600' defaultHoverBG='hover:bg-purple-600' menuHoverBG='hover:bg-purple-700' />
                            <DropdownButton btnName='pages' btnBG='bg-sky-100' defaultBG='bg-sky-600' defaultColor='text-sky-600' defaultHoverBG='hover:bg-sky-600' menuHoverBG='hover:bg-sky-700' />
                        </>
                    }
                    <FilterIcon iconClass='icon-minus' />
                </nav>
            </div>
            <div className='border-t border-gray-100'>
                { children }
            </div>
        </div>
    )
}