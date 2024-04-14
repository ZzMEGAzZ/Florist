import BreadcrumbComponent, { BreadCrumb } from "./Breadcrumb";

type Props = {
    breadCrumb: BreadCrumb[];
    className?: string;
}

export default function BreadCrumbBar({ breadCrumb, className }: Props) {
    return (
        <div className={`w-full h-[50px] bg-background px-10 flex flex-col justify-center ${className} bg-subBackground`}>
            <BreadcrumbComponent breadCrumb={breadCrumb} />
        </div>
    )
}