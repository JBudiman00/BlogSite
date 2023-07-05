'use client'
import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import api from '../../components/axiosInstance';
import { useRouter } from 'next/navigation';
import Link from "next/link";

const Create: NextPage = () => {
    const router = useRouter();
    const [category, setCategory] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [summary, setSummary] = useState<string>("");
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        api.post('/auth/verify')
        .catch((err: any) => {
            if(err.response.status == 401){
                router.push('/');
            }
        });
    }, [])

    const titleChange = (e: any) => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const categoryChange = (e: any) => {
        e.preventDefault();
        setCategory(e.target.value);
    }

    const typeChange = (e: any) => {
        e.preventDefault();
        setType(e.target.value);
    }

    const summaryChange = (e: any) => {
        e.preventDefault();
        setSummary(e.target.value);
    }

    const fileChange = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e: any) => {
            const text = e.target.result;
            setContent(text);
          };

        reader.readAsText(file);
    }

    //Post article
    const onSubmit = (e: any) => {
        e.preventDefault();
        //Check all fields are filled out
        if(category === "" || type === "" || title === "" || summary === "" || content === ""){
            console.log("Not all fields filled out")
        } else {
            //Submit post request to API
            api.post('/articles', {
                type: type,
                category: category,
                title: title,
                summary: summary,
                content: content
            })
            .then((item: any) => {
                router.push('/admin')
            })
            .catch((error: any) => {
                console.error(error);
            });
        }
    }

    return (
        <div className="h-[calc(100vh-257px)] w-screen text-[#82614A]">
            <div className="flex h-full justify-center items-center">
                <div className="flex flex-col h-1/2 w-1/3 bg-[#D0BCA0] items-center">
                    <div className="flex flex-row w-full">
                        <Link href={({
                            pathname: "/admin"
                        })}>
                            <img src="/backarrow.png" className="w-6 h-6 ml-2 mt-2"/>
                        </Link>
                        <p className="text-3xl my-5 flex-grow flex justify-center mr-8">Create new article</p>
                    </div>
                    <form className="w-1/2" onSubmit={e => onSubmit(e)}>
                        <div className="flex flex-row mb-2">
                            <p className="text-lg mr-2">Title</p>
                            <input 
                                type="text"
                                value={title}
                                onChange={titleChange}
                            />
                        </div>
                        <div className="flex flex-row mb-2">
                            <p className="text-lg mr-2">Type</p>
                            <select value={type} onChange={e => typeChange(e)}>
                                <option value=""></option>
                                <option value="Nathan">Nathan</option>
                                <option value="Chloe">Chloe</option>
                                <option value="chloeNathan">Chloe+Nathan</option>
                            </select>
                        </div>
                        <div className="flex flex-row mb-2">
                            <p className="text-lg mr-2">Category</p>
                            <select value={category} onChange={e => categoryChange(e)}>
                                <option value=""></option>
                                <option value="life">Life</option>
                                <option value="food">Food</option>
                                <option value="places">Places</option>
                                <option value="attractions">Attractions</option>
                            </select>
                        </div>
                        <div className="flex flex-row mb-2">
                            <p className="text-lg mr-2">Summary</p>
                            <input 
                                type="text"
                                value={summary}
                                onChange={summaryChange}
                            />
                        </div>
                        <div className="flex flex-row mb-2">
                            <p className="text-lg mr-2">Content</p>
                            <input type="file" onChange={fileChange} />
                        </div>
                        <div className="flex flex-row justify-center mt-6">
                            <button type="submit" className="bg-[#82615A] rounded-md">
                                <p className="text-[#E7DED0] text-xl p-1">
                                    Submit
                                </p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Create;