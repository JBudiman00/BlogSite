import ArticleItem from '../interface/articleitem';
import Link from "next/link";

interface IProps {
    item: ArticleItem
}

export default function BlogList ({ item }: IProps) {
    const id = item.ID;
    const type = item.type;
    const category = item.category;
    const title = item.title;
    const summary = item.summary;
    const createdAt = new Date(item.createdAt);
    const updatedAt = item.updatedAt;
    
    return (
        <div className="w-full text-[#82614A]">
            <Link href={({
                    pathname: "/blog",
                    query: { id: id}
                })}>
            <div className="grid grid-cols-3">
                <p className="text-3xl col-span-1">{title}</p>
                <div className="grid col-span-1">
                    <p className="text-md ml-6 mt-2">{createdAt.toLocaleString()}</p>
                </div>
                <div className="flex flex-row col-span-1 text-[#E7DED0] justify-self-end">
                    <div className="bg-[#9F825B] rounded-xl px-2 pt-1">
                        <p className="text-xl">{type}</p>
                    </div>
                    <div className="w-2"></div>
                    <div className="bg-[#9F825B] rounded-xl px-2 pt-1">
                        <p className="text-xl">{category}</p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-row text-[#E7DED0]">
                <img src="placeholder.jpg" className="w-1/3 aspect-video"/>
                <div className="w-2/3 px-3 mx-4 my-2 bg-[#9F825B] rounded-xl">
                    <p className="text-lg">{summary}</p>
                </div>
            </div>
            </Link>
        </div>
    );
}