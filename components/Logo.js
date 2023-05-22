import Image from "next/image"
import Link from "next/link"

export default function Logo({ white }) {
    return (
        <Link href='/' className='flex-shrink-0'>
            <Image src="/images/logo.png" alt="frontend-template" width={130} height={40} className={`w-28 sm:w-32 ${ white ? 'brightness-[10]' : '' }`} />
        </Link>
    )
}