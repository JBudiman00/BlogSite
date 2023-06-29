'use client'
import { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import axios from 'axios';

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

    useEffect(() => {
        axios.get('http://localhost:8000/articles/' + searchParams.get("id"))
        .then((item: any) => {
            setArticle(item.data);
            console.log(item.data.content)
        });
    }, [])

    return (
        <div className="flex justify-center text-[#82614A]">
            <div className="w-2/3">
                <div className="h-6"></div>
                <p className="text-4xl">{article?.title}</p>
                <p>Created by {article?.type}</p>
                <div className="whitespace-pre-wrap">
                    {article?.content}
                </div>
                <div className="h-6"></div>
            </div>
        </div>
    );
}