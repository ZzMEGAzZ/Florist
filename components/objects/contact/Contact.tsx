import { ClockSvg, MapPinSvg, PhoneSvg } from "@/assets/svg/Icon";
import Middle from "@/components/layouts/Middle";
import Span from "@/components/layouts/Span";

export default function Contact() {
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center mt-10">
                <Span Y className="w-full p-4 md:w-[60%] h-full">
                    <Span X className="w-full h-full"><h2 className="text-2xl">Get In Touch With Us</h2></Span>
                    <Span X className="w-full h-full"><p className="text-md text-muted-foreground text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p></Span>
                </Span>
                <Span X className="w-full p-4 md:w-[60%] h-full">
                    <Span Y className="w-full p-4 md:w-[40%] h-full items-start gap-8">
                        <div className="grid grid-cols-[20px_auto] items-center space-x-4">
                            <MapPinSvg className="w-5 h-5" />
                            <h3 className="text-lg font-bold">Address</h3>
                            <div />
                            <p className="text-md text-muted-foreground">1234 Street Name, City Name, United States</p>
                        </div>
                        <div className="grid grid-cols-[20px_auto] items-center space-x-4">
                            <PhoneSvg className="w-5 h-5" />
                            <h3 className="text-lg font-bold">Phone</h3>
                            <div />
                            <Span Y className="w-full h-full">
                                <p className="text-md text-muted-foreground">Mobile: +(84) 546-6789</p>
                                <p className="text-md text-muted-foreground">Mobile: +(84) 546-6789</p>
                            </Span>
                        </div>
                        <div className="grid grid-cols-[20px_auto] gap-4">
                            <ClockSvg className="w-5 h-5" />
                            <Span Y className="w-full h-full">
                                <h3 className="text-lg font-bold">Working Time</h3>
                                <p className="text-md text-muted-foreground">Monday-Friday: 9:00 - 22:00</p>
                                <p className="text-md text-muted-foreground">Saturday-Sunday: 9:00 - 21:00</p>
                            </Span>
                        </div>
                    </Span>
                </Span>
            </div>
        </>
    )
}