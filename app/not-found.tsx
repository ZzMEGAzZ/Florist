import { headers } from "next/headers";

export default function NotFoundPage() {
    const headersList = headers();
    const domain = headersList.get('host') || "";
    const fullUrl = headersList.get('referer') || "";
    const [, pathname] = fullUrl.match(new RegExp(`https?:\/\/${domain}(.*)`)) || [];
    return (
        <>

                <div className="w-screen h-screen">
                    <div className="w-full h-full">
                        <div className="w-full h-full flex flex-col justify-center items-center space-y-2">
                            <p className="text-2xl font-bold text-Primary">404</p>
                            <p className="text-2xl font-bold text-Primary">Page Not Found</p>
                            <p className="text-Primary text-sm">{fullUrl}</p>
                            <a href="/" className="text-Primary hover:text-Primary-light text-base mt-4 cursor-pointer hover:underline">
                                Go to Home
                            </a>
                        </div>
                    </div>
                </div>

        </>
    )
}