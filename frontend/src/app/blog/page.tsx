'use client'
import { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import axios from 'axios';
import { ArticleItem } from '../nathan/page';

export default function Home() {
    const searchParams = useSearchParams();
    const [article, setArticle] = useState<ArticleItem>();

    useEffect(() => {
        axios.get('http://localhost:8000/articles/' + searchParams.get("id"))
        .then((item: any) => {
            setArticle(item.data);
        });
    }, [])

    return (
        <div className="flex justify-center">
            <div className="w-2/3">
                <p className="text-4xl">{article?.title}</p>
                <p>Created by {article?.type}</p>
                {article?.content}
            </div>
        </div>
    );
}