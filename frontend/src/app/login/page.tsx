'use client'
import { useState } from 'react';

export default function Home() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        //Validate form
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
                                type="text"
                                value={password}
                                onChange={handlePassword}
                            />
                        </div>
                        <div className="h-6"></div>
                        <button type="submit" className="bg-[#82614A] text-[#E7DED0] rounded-lg py-1 px-2 w-1/3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        );
}