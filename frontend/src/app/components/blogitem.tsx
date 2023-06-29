import { ArticleItem } from './bloglist';
import { useRouter } from 'next/navigation';
import Link from "next/link";

interface IProps {
    item: ArticleItem
}

export default function BlogList ({ item }: IProps) {
    const router = useRouter();
    const id = item.ID;
    const type = item.type;
    const category = item.category;
    const title = item.title;
    const summary = item.summary;
    const createdAt = new Date(item.createdAt);
    const updatedAt = item.updatedAt;
    
    return (
        <div className="w-full text-[#82614A]">
            <div className="grid grid-cols-3">
                <Link href={({
                    pathname: "/blog",
                    query: { id: id}
                })}>
                    <p className="text-3xl col-span-1">{title}</p>
                </Link>
                <div className="grid col-span-1">
                    <p className="text-md">{createdAt.toLocaleString()}</p>
                </div>
                <div className="bg-[#9F825B] col-span-1 text-[#E7DED0] justify-self-end rounded-xl px-2">
                    <p className="text-xl">{category}</p>
                </div>
                
            </div>
            <div className="flex flex-row text-[#E7DED0]">
                <img src="placeholder.jpg" className="w-1/3 aspect-video"/>
                <div className="w-2/3 px-3 mx-4 my-2 bg-[#9F825B] rounded-xl">
                    <p className="text-lg">{summary}</p>
                </div>
            </div>
        </div>
    );
}