import Middle from "@/components/layouts/Middle";
import Span from "@/components/layouts/Span";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { floatingSep } from "@/utils/floatingSep";

interface Props {
    items: {
        id: string;
        name: string;
        price: number;
        quantity: number;
    }[];
    total: number;
    submit: () => void;
    attachSlip: () => void;
}

export default function CheckoutSubmit({ items, total, submit, attachSlip }: Props) {
    return (
        <>
            <Middle X Y className="w-full h-full">
                <Card className="w-full min-h-[250px] flex flex-col justify-between">
                    <CardContent className="mt-4 space-y-1">
                        <div className="grid grid-cols-[150px_auto] gap-4 justify-between">
                            <p className="text-md">Product</p>
                            <Span className="text-md">Subtotal</Span>
                        </div>
                        {
                            items.map((item) => (
                                <div key={item.id} className="grid grid-cols-[150px_auto] gap-4 justify-between">
                                    <p className="text-sm">{item.name} x {item.quantity}</p>
                                    <Span className="text-sm">{floatingSep(item.price)} ฿</Span>
                                </div>
                            ))
                        }


                    </CardContent>
                    <CardFooter className="flex-col items-stretch space-y-4">
                        <div className="grid grid-cols-[150px_auto] gap-4 justify-between">
                            <p className="text-lg">Total : </p>
                            <Span className="text-lg text-accent-foreground">{floatingSep(total ?? 0)} ฿</Span>
                        </div>
                        <Button className="w-full" onClick={attachSlip}>Attach Slip</Button>
                        <Button className="w-full" onClick={submit}>Submit</Button>
                    </CardFooter>
                </Card>
            </Middle>
        </>
    )
}