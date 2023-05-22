export default function BreadcrumbItem({ children }) {
    return (
        <li className="text-xs font-medium capitalize whitespace-nowrap flex items-center 
        after:content-['\e013'] after:text-[10px] after:font-iconly after:mx-3 last:after:hidden after:text-gray-400">{ children }</li>
    )
}