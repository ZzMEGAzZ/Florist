import CoverCarousel, { Cover } from "./ui/CoverCarousel";
import CoverHome from "./ui/CoverHome";

const coverArray: Cover[] = [
    {
        img: '',
        title: 'Title 1',
        description: 'Description',
        button: 'Button',
        link: '/',
    },
    {
        img: '',
        title: 'Title 2',
        description: 'Description',
        button: 'Button',
        link: '/',
    },
    {
        img: '',
        title: 'Title 3',
        description: 'Description',
        button: 'Button',
        link: '/',
    },
    {
        img: '',
        title: 'Title 4',
        description: 'Description',
        button: 'Button',
        link: '/',
    },
    {
        img: '',
        title: 'Title 5',
        description: 'Description',
        button: 'Button',
        link: '/',
    },
]

export default function HomeCover() {
    return (
        <div className="w-full">
            <CoverCarousel cover={coverArray} />
        </div>
    )

}