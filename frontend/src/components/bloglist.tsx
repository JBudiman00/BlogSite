'use client'
import { useEffect, useState } from 'react';
import api from '../api/axiosInstance';
import BlogDisplay from './blogdisplay';
import BlogList from './blogitem';
import {articleItem} from '@/types/blogTypes';

export default function Home(props: any) {
    const [listArticles, setList] = useState<Array<articleItem>>([]);
    const [filteredArticles, setFilter] = useState<Array<articleItem>>([]);

    useEffect(() => {
        api.get('/articles')
        .then((item) => {
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
                    {filteredArticles.map((element: articleItem) =>{
                        return (
                            <>
                                <BlogList ID={element.ID} type={element.type } category={element.category} title={element.title} summary={element.summary} createdAt={element.createdAt} updatedAt={element.updatedAt} is_featured={element.is_featured}/>
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