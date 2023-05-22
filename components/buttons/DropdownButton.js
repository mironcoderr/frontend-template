export default function DropdownButton({ btnName, btnBG, defaultBG, defaultColor, defaultHoverBG, menuHoverBG }) {
    return (
        <div className="relative ml-2">
            <button type='button' className={`inline-flex items-center justify-center gap-1.5 pr-2 rounded-full ${ btnBG } ${ defaultColor } transition-all duration-500 ${ defaultHoverBG } hover:text-white`}>
                <small className={`text-xs font-medium w-7 h-7 leading-6 -ml-2 text-center rounded-full border-2 border-white ${ defaultBG } text-white`}>14</small>
                <span className='text-[11px] uppercase font-semibold'>{ btnName }</span>
                <i className='icon-chevron-down text-[10px] -mt-0.5'></i>
            </button>
            {/* <nav className={`absolute top-10 right-0 z-10 p-2 rounded-lg shadow-paper ${ defaultBG } text-white`}>
                <button type="button" className={`text-xs font-medium capitalize text-left whitespace-nowrap w-full py-1.5 pl-2 pr-6 rounded-lg transition-all duration-300 ${ menuHoverBG }`}>header blocks</button>
                <button type="button" className={`text-xs font-medium capitalize text-left whitespace-nowrap w-full py-1.5 pl-2 pr-6 rounded-lg transition-all duration-300 ${ menuHoverBG }`}>footer blocks</button>
                <button type="button" className={`text-xs font-medium capitalize text-left whitespace-nowrap w-full py-1.5 pl-2 pr-6 rounded-lg transition-all duration-300 ${ menuHoverBG }`}>banner blocks</button>
                <button type="button" className={`text-xs font-medium capitalize text-left whitespace-nowrap w-full py-1.5 pl-2 pr-6 rounded-lg transition-all duration-300 ${ menuHoverBG }`}>sidebar blocks</button>
                <button type="button" className={`text-xs font-medium capitalize text-left whitespace-nowrap w-full py-1.5 pl-2 pr-6 rounded-lg transition-all duration-300 ${ menuHoverBG }`}>canvus blocks</button>
                <button type="button" className={`text-xs font-medium capitalize text-left whitespace-nowrap w-full py-1.5 pl-2 pr-6 rounded-lg transition-all duration-300 ${ menuHoverBG }`}>popup blocks</button>
            </nav> */}
        </div>
    )
}