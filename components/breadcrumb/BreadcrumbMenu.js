import Link from "next/link";
import BreadcrumbItem from "./BreadcrumbItem";

export default function BreadcrumbMenu({ route, name }) {
    return (
        <BreadcrumbItem>
            <Link className="text-secondary transition-all duration-300 hover:text-primary" href={ route }>{ name }</Link>
        </BreadcrumbItem>
    )
}