'use client'
import { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import api from '../components/axiosInstance';

export interface Article {
    ID: number,
    type: string,
    category: string,
    title: string,
    summary: string,
    createdAt: string,
    updatedAt: string | null,
    content: string
}

export default function Home() {
    const searchParams = useSearchParams();
    const [article, setArticle] = useState<Article>();
    const [type, setType] = useState<string>("");
    const [date, setDate] = useState<Date | null>(null);

    useEffect(() => {
        api.get('/articles/' + searchParams.get("id"))
        .then((item: any) => {
            setArticle(item.data);
            if(item.data.type === "Nathan"){
                setType("Nathan Budiman")
            } else if(item.data.type === "Chloe") {
                setType("Chloe Lin")
            } else {
                setType("Chloe Lin and Nathan Budiman")
            }
            setDate(new Date(item.data.createdAt))
        });

    }, [])

    return (
        <div className="flex justify-center text-[#82614A]">
            <div className="w-2/3 min-h-[calc(100vh-257px)]">
                <div className="h-6"></div>
                <p className="text-5xl">{article?.title}</p>
                <div className="h-4"></div>
                <p className="text-lg">Created by {type}</p>
                <p className="text-lg">Date: {date?.toLocaleString()}</p>
                <div className="h-6"></div>
                <div className="whitespace-pre-wrap text-lg leading-10">
                    {article?.content}
                </div>
                <div className="h-6"></div>
            </div>
        </div>
    );
}