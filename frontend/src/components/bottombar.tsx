'use client'
import Link from "next/link";

export default function BottomBar () {
    return (
        <div className="h-48 bg-[#82614A] text-center">
            <div className="h-6"></div>
            <p>© 2023 Copyright</p>
            <div className="h-6"></div>
            <div className="flex flex-row justify-center">
                <Link href={({
                    pathname: "/"
                })}>
                    <div className="font-bold mx-3">Home</div>
                </Link>
                <Link href={({
                    pathname: "/nathan"
                })}>
                    <div className="font-bold mx-3">Nathan</div>
                </Link>
                <Link href={({
                    pathname: "/chloe"
                })}>
                    <div className="font-bold mx-3">Chloe</div>
                </Link>
                <Link href={({
                    pathname: "/us"
                })}>
                    <div className="font-bold mx-3">Chloe+Nathan</div>
                </Link>
                <Link href={({
                    pathname: "/"
                })}>
                    <div className="font-bold mx-3">Timeline</div>
                </Link>
            </div>
            <div className="h-3"></div>
            <div className="flex flex-row h-14 justify-center">
                <a href="https://www.instagram.com/n8budiman/"><img src="/insta.png" className="m-2 h-10"/></a>
                <a href="https://github.com/JBudiman00/BlogSite" target="_blank"><img src="/github.png" className="m-2 h-10" /></a>
                <img src="/mail.png" className="m-2 h-10" onClick={() => window.location.href = 'mailto:jbudiman@purdue.edu'}/>
            </div>
        </div>
    );
}