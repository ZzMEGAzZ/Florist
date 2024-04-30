import Middle from "@/components/layouts/Middle";

export default function Loading() {
    return (
        <Middle X Y className="w-full h-max min-h-[95dvh]">
            <div className="w-full h-full flex flex-col justify-center items-center space-y-2">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-Primary rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-Primary rounded-full animate-bounce animation-delay-200"></div>
                    <div className="w-3 h-3 bg-Primary rounded-full animate-bounce animation-delay-400"></div>
                </div>
                <p className="text-2xl font-bold text-Primary ml-2">Loading</p>
            </div>
        </Middle>
    )
}