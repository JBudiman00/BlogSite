import {Bloghighlightprops} from "@/types/blogTypes";
import Link from "next/link";

export default function Home(props: Bloghighlightprops) {
    return (
        <>
            <div className="flex flex-row">
                <div className="w-2/3">
                    <p className="text-3xl">{props.title}</p>
                </div>
                <div className="flex w-1/3 justify-end items-center text-[#E7DED0]">
                    <div className="bg-[#9F825B] rounded-xl px-2">
                        <p className="text-xl">{props.data?.type}</p>
                    </div>
                    <div className="w-2"></div>
                    <div className="bg-[#9F825B] rounded-xl px-2">
                        <p className="text-xl">{props.data?.category}</p>
                    </div>
                </div>
            </div>
            <Link href={({
                        pathname: "/blog",
                        query: { id: props.data?.ID}
            })}>
            <div className="bg-[#9F825B] text-[#E7DED0] rounded-xl px-2 py-1">
                <p className="text-xl">{props.data?.title}</p>
                <p className="text-md">{props.data?.summary}</p>
            </div>
            </Link>
        </>
    );
}