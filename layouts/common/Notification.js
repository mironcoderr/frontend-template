import Link from "next/link";

export default function Notification() {
    return (
        <div className="fixed bottom-5 left-5 z-50 w-fit p-1.5 pr-3 rounded-full shadow-paper bg-white">
            <button type="button" className="absolute -top-3 right-5">
                <i className="icon-xmark text-xs w-5 h-5 leading-5 text-center rounded-full text-red-600 bg-white"></i>
            </button>
            <Link href="/hotash" className="flex items-center gap-3">
                <img src="/images/logos/hotash.jpg" alt="product" className="w-[70px] h-[70px] flex-shrink-0 rounded-full shadow-xsb object-cover" />
                <div>
                    <div className="whitespace-nowrap flex items-center gap-1 mb-1">
                        <h3 className="text-xs font-semibold capitalize">Madelyn</h3>
                        <span className="text-xs font-medium lowercase">from</span>
                        <h4 className="text-xs font-semibold capitalize">australia</h4>
                    </div>
                    <div className="whitespace-nowrap flex items-center gap-1">
                        <span className="text-xs font-medium capitalize">just purchased</span>
                        <h4 className="text-xs font-semibold capitalize">hotash template</h4>
                    </div>
                    <span className="text-[10px] leading-3 font-medium lowercase text-paragraph">about 20 minutes ago!</span>
                </div>
            </Link>
        </div>
    )
}