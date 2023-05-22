import BreadcrumbItem from "./BreadcrumbItem";

export default function Breadcrumb({ children, activeRoute, className }) {
    return (
        <ol className={`flex items-center ${ className ? className : '' }`}>
            { children }
            { activeRoute && <BreadcrumbItem>{ activeRoute }</BreadcrumbItem> }
        </ol>
    )
}