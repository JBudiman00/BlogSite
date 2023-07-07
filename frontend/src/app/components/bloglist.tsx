'use client'
import { useEffect, useState } from 'react';
import api from '../components/axiosInstance';
import BlogDisplay from './blogdisplay';
import BlogList from './blogitem';
import ArticleItem from '../interface/articleitem';

export default function Home(props: any) {
    const [listArticles, setList] = useState<Array<ArticleItem>>([]);
    const [filteredArticles, setFilter] = useState<Array<ArticleItem>>([]);

    useEffect(() => {
        api.get('/articles')
        .then((item: any) => {
            //Filter down to only articles by Nathan
            const result = item.data.filter((i: any) => {
                return i.type === props.type
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