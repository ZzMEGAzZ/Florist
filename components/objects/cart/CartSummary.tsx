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
    checkOut: () => void;
}

export default function CartSummary({ items, total, checkOut }: Props) {
    return (
        <>
            <Middle X Y className="w-full h-full">
                <Card className="w-full min-h-[250px] flex flex-col justify-between">
                    <CardHeader>
                        <CardTitle className="text-center">Cart Totals</CardTitle>
                    </CardHeader>
                    <CardContent className="">
                        {
                            items.map((item) => (
                                <div key={item.id} className="grid grid-cols-[150px_auto] gap-4 justify-between">
                                    <p className="text-sm">{item.name} x {item.quantity}</p>
                                    <Span className="text-sm">{floatingSep(item.price)} ฿</Span>
                                </div>
                            ))
                        }
                        <div className="grid grid-cols-[150px_auto] gap-4 justify-between">
                            <p className="text-md">Total : </p>
                            <Span className="text-md text-accent-foreground">{floatingSep(total ?? 0)} ฿</Span>
                        </div>
                        
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" onClick={checkOut}>Checkout</Button>
                    </CardFooter>
                </Card>
            </Middle>
        </>
    )
}