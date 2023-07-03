'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleItem from '../interface/articleitem';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const [articleList, setList] = useState<Array<ArticleItem>>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [idSelect, setID] = useState<number>();
    
    useEffect(() => {
        axios.get('http://localhost:8000/articles')
        .then((item: any) => {
            setList(item.data);
        });
    }, [isOpen])

    const onClick = (e: any) => {
        e.preventDefault();
        router.push('/admin/create')
    }

    const editClick = (e: any, id: number) => {
        e.preventDefault();
        router.push('/admin/edit?id=' + id)
    }

    const deleteToggle = (e: any, id: number) => {
        e.preventDefault();
        setIsOpen(true);
        setID(id);
    }

    const deleteClick = (e: any) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/articles/' + idSelect)
        .then((item: any) => {
            setID(undefined);
            setIsOpen(false);
        })
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
                <div className="flex flex-col items-center">
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
                                    <img src="editicon.png" className="border border-black m-1 p-1 bg-yellow w-10" onClick={e => editClick(e, item.ID)}/>
                                    <img src="deleteicon.png" className="border border-black m-1 p-1 bg-yellow w-10" onClick={e => deleteToggle(e, item.ID)}/>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="fixed inset-0 bg-gray-800 opacity-75"></div>
                        <div className="relative bg-white rounded-lg p-2 w-1/2">
                            <div className="flex flex-col items-center">
                                <p className="text-lg mb-2">Are you sure you want to delete this article permanently?</p>
                                <button 
                                    className="bg-[#EF9A9A] border border-[#F44336] p-2 mb-6"
                                    onClick={e => deleteClick(e)}
                                >
                                    <p className="text-black">
                                        Delete
                                    </p>
                                </button>
                                <button
                                    className="text-gray-500 hover:text-gray-800"
                                    onClick={(e:any) => setIsOpen(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="h-6"></div>
            </div>
        </div>
    )
}