export default function FilterIcon({ iconClass }) {
    return (
        <button type='button' className={`${ iconClass } text-sm w-7 h-7 leading-7 text-center rounded-full bg-slate-100 transition-all duration-500 hover:bg-slate-200`}></button>
    )
}