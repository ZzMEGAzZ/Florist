import Image from 'next/image';
import coverImg from '@/assets/images/cover.jpeg';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import { Cover } from './CoverCarousel';

type Props = {
    cover: Cover;
}

export default function CoverHome({ cover }: Props) {
    return (
        <div className='relative w-full'>
            <div className='aspect-[2/1] overflow-hidden relative'>
                <Image
                    src={coverImg} alt={'cover'}
                    className='w-full aspect-[2/1] object-cover'
                />
            </div>
            <Card className={cn("z-10 w-1/2 max-w-2xl mx-auto mt-4 absolute right-[5%] bottom-1/3")}>
                <CardHeader>
                    <CardTitle>{cover.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        {cover.description}
                    </CardDescription>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">
                        <Link href={cover.link}>
                            {cover.button}
                        </Link>
                    </Button>
                </CardFooter>
            </Card>


        </div>
    );
}
