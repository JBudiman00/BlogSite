'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleItem from '../interface/articleitem';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const [articleList, setList] = useState<Array<ArticleItem>>([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/articles')
        .then((item: any) => {
            setList(item.data);
        });
    }, [])

    const onClick = (e: any) => {
        e.preventDefault();
        router.push('/admin/create')
    }

    return(
        <div className="flex justify-center">
            <div className="w-2/3">
                <div className="h-6"></div>
                <p className="text-5xl text-center">ADMIN CONTROL</p>
                <div className="h-6"></div>
                <div className="flex flex-row justify-end" onClick={e => onClick(e)} >
                    <button className="bg-[#9F825B] rounded-md p-1">
                        Create
                    </button>
                </div>
                <div className="h-2"></div>
                <div className="flex flex-row text-center">
                    <p className="border border-black w-12">ID</p>
                    <p className="border border-black w-28">Type</p>
                    <p className="border border-black w-24">Category</p>
                    <p className="border border-black w-28">title</p>
                    <p className="border border-black w-28">CreatedAt</p>
                    <p className="border border-black w-28">UpdatedAt</p>
                    <p className="border border-black w-64">Summary</p>
                    <p className="border border-black w-28">Options</p>
                </div>
                {articleList.map((item: ArticleItem) => {
                    return (
                        <div key={item.ID} className="flex flex-row">
                            <p className="border border-black w-12 text-center">{item.ID}</p>
                            <p className="border border-black w-28">{item.type}</p>
                            <p className="border border-black w-24">{item.category}</p>
                            <p className="border border-black w-28">{item.title}</p>
                            <p className="border border-black w-28">{new Date(item.createdAt).toLocaleString()}</p>
                            <p className="border border-black w-28">{new Date(item.updatedAt ? item.updatedAt: "").toLocaleString()}</p>
                            <p className="border border-black w-64">{item.summary}</p>
                            <div className="flex flex-row border justify-around border-black w-28">
                                <img src="editicon.png" className="border border-black m-1 p-1 bg-yellow w-10" />
                                <img src="deleteicon.png" className="border border-black m-1 p-1 bg-yellow w-10" />
                            </div>
                        </div>
                    );
                })}
                <div className="h-6"></div>
            </div>
        </div>
    )
}