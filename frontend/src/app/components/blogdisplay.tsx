import { useState, useEffect } from 'react';
import { ArticleItem } from '../nathan/page'

interface blogdisplay{
    initialList: ArticleItem[],
    // setFilter: React.Dispatch<React.SetStateAction<ArticleItem[]>>,
    setFilter: any
    filteredArticles: any
}

export default function BlogDisplay (props: blogdisplay) {
    const [query, setQuery] = useState<string>("");

    //Update search feature and ensure synchronization
    useEffect(() => {
        const filteredOptions = props.initialList.filter((i: ArticleItem) => {
            if (query === ""){
                return true
            } else{
                return i.title.toLowerCase().includes(query)
            }
        })
        props.setFilter(filteredOptions);
    }, [query]);

    const setChange = async (e: any) => {
        e.preventDefault();
        setQuery(e.target.value.toLowerCase());
    }

    return (
        <>
            <div className="flex justify-center w-screen text-[#82614A]">
                <div className="w-2/3">
                    <div className="h-2"></div>
                    <div className="flex flex-row justify-end">
                        <input placeholder="Search title here..." onChange={e => setChange(e)} className="item" />
                    </div>
                    <div className="h-2"></div>
                </div>
            </div>
        </>
    );
}