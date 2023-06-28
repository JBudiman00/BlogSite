'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogDisplay from '../components/blogdisplay';
import BlogList from '../components/bloglist';

export interface ArticleItem {
    ID: number,
    type: String,
    category: String,
    title: String,
    summary: String,
    createdAt: String,
    updatedAt: String | null,
    content: String
}

export default function Home() {
    const [listArticles, setList] = useState<Array<ArticleItem>>([]);
    const [filteredArticles, setFilter] = useState<Array<ArticleItem>>([]);

    useEffect(() => {
        axios.get('http://localhost:8000/articles')
        .then((item: any) => {
            //Filter down to only articles by Nathan
            const result = item.data.filter((i: any) => {
                return i.type === "Nathan"
            })
            setList(result);
            setFilter(result);
        });
    }, []);

    return (
        <>
            <BlogDisplay initialList={listArticles} setFilter={setFilter} filteredArticles={filteredArticles}/>
            <div className="flex justify-center">
                <div className="w-2/3">
                    {filteredArticles.map((item: ArticleItem) =>{
                        return (
                            <>
                                <BlogList item={item}/>
                                <div className="h-12"></div>
                            </>
                        );
                    })}
                </div>
            </div>
            <div className="h-12"></div>
        </>
        );
}