'use client'
import { useState } from 'react';
import api from '../components/axiosInstance';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [status, setStatus] = useState<any>();
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        //Validate form
        api.post('/auth/login', {
            username: username,
            password: password
        })
        .then((i: any) => {
            console.log(i.data);
            setStatus(<></>)
            router.push('/admin')
        })
        .catch((error: any) => {
            console.error(error);
            setStatus(badLogin)
        });
    }

    const badLogin = () => {
        return (
            <div className="bg-[#EF9A9A] border border-[#F44336] h-10">
                <p className="text-center">Incorrect username/login</p>
            </div>
        );
    }

    const handleUsername = (event: any) => {
        event.preventDefault();
        setUsername(event.target.value);
    }

    const handlePassword = (event: any) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    return (
        <div className="h-[calc(100vh-257px)] w-screen text-[#82614A]">
            <div className="flex h-full justify-center items-center">
                <div className="grid grid-cols h-1/2 w-1/3 bg-[#D0BCA0] justify-center">
                    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center">
                        <p className="text-3xl my-4 text-center">Login Page</p>
                        <div className="h-6"></div>
                        <div className="flex flex-row">
                            <p className="text-lg mr-2">Username</p>
                            <input 
                                type="text"
                                value={username}
                                onChange={handleUsername}
                            />
                        </div>
                        <div className="h-6"></div>
                        <div className="flex flex-row">
                            <p className="text-lg mr-2">Password</p>
                            <input 
                                type="password"
                                value={password}
                                onChange={handlePassword}
                            />
                        </div>
                        <div className="h-6"></div>
                        <button type="submit" className="bg-[#82614A] text-[#E7DED0] rounded-lg py-1 px-2 w-1/3">Submit</button>
                    </form>
                    {status}
                </div>
            </div>
        </div>
        );
}