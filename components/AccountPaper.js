import Link from "next/link";

export default function AccountPaper() {
    return (
        <div className="absolute top-[50px] right-3 z-10 py-5 w-full max-w-[300px] rounded-xl shadow-paper border border-gray-100 bg-white">
            <div className="flex flex-col items-center justify-center text-center mb-6">
                <figure className="relative z-10 w-[98px] h-[98px] border-2 border-dashed rounded-full inline-flex items-center justify-center border-white bg-gradient-to-t from-purple-500 to-primary
                                before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-24 before:h-24 before:rounded-full before:-z-10 before:bg-white">
                    <img className="w-[90px] h-[90px] rounded-full shadow-avatar" src="/images/avatars/01.jpg" alt="avatar" />
                </figure>
                <label for="avatar" className="w-11 h-11 z-10 -mt-7 mb-1 relative isolate rounded-full border-2 text-white bg-primary border-white">
                    <input type="file" id="avatar" className="w-full h-full rounded-full opacity-0 absolute inset-0" />  
                    <i className="icon-image text-base w-full h-full leading-10 rounded-full cursor-pointer absolute inset-0 "></i>
                </label>
                <h3 className="font-semibold text-sm leading-6 capitalize mb-1">Madelyn Lubin</h3>
                <p className="text-xs font-medium">madelynlub@gmail.com</p>
            </div>
            <nav>
                <Link href="#" className="flex items-center gap-3 py-2 px-4 border-t last:text-red-600 border-gray-100 transition-all duration-300 hover:bg-gray-100 hover:text-primary">
                    <i className="icon-line-profile text-lg"></i>
                    <span className="text-sm font-medium capitalize">profile</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 py-2 px-4 border-t last:text-red-600 border-gray-100 transition-all duration-300 hover:bg-gray-100 hover:text-primary">
                    <i className="icon-line-shield-check text-lg"></i>
                    <span className="text-sm font-medium capitalize">change password</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 py-2 px-4 border-t last:text-red-600 border-gray-100 transition-all duration-300 hover:bg-gray-100 hover:text-primary">
                    <i className="icon-line-download-folder text-lg"></i>
                    <span className="text-sm font-medium capitalize">downloads</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 py-2 px-4 border-t last:text-red-600 border-gray-100 transition-all duration-300 hover:bg-gray-100 hover:text-primary">
                    <i className="icon-line-card text-lg"></i>
                    <span className="text-sm font-medium capitalize">transactions</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 py-2 px-4 border-t last:text-red-600 border-gray-100 transition-all duration-300 hover:bg-gray-100 hover:text-primary">
                    <i className="icon-line-lock text-lg"></i>
                    <span className="text-sm font-medium capitalize">logout</span>
                </Link>
            </nav>
        </div>
    )
}