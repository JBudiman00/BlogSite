'use client'
import BlogBlock from './components/blogblock'
import { useEffect, useState } from 'react'
import { ArticleItem } from './components/bloglist';
import axios from 'axios';


export default function Home() {
  //UseState to store article ID for links to other pages 
  const [recentNathan, setRecentNathan] = useState<number>(0);
  const [recentChloe, setRecentChloe] = useState<number>(0);
  const [recentCN, setRecentCN] = useState<number>(0);

  useEffect(() => {
    axios.get('http://localhost:8000/articles')
        .then((e: any) => {
            const articleList = e.data;
            //Get Nathan's most recent blog
            const nathanList = articleList.filter((item: ArticleItem) => item.type === "Nathan")
            const articleNathan = getRecent(nathanList);
            setRecentNathan(articleNathan.ID);
            //Get Chloe's most recent blog
            const chloeList = articleList.filter((item: ArticleItem) => item.type === "Chloe")
            const articleChloe = getRecent(chloeList);
            setRecentNathan(articleChloe.ID);
            //Get Chloe + Nathan's most recent blog
        });
  }, []);

  const getRecent = (data: Array<ArticleItem>) => {
    const recent = data.reduce((prevObj: ArticleItem, currObj: ArticleItem) => {
      const prevDate = new Date(prevObj.createdAt);
      const currDate = new Date(currObj.createdAt);
      return currDate > prevDate ? currObj: prevObj;
    })

    return recent
  }

  return (
    <div className="flex justify-center w-screen text-[#82614A]">
      <div className="w-2/3">
        <div className="h-6"></div>
        <div className="flex flex-row">
          <div className="bg-[#D0BCA0] pt-12 px-6">
            <p className="text-5xl text-center">Chloe & Nathan's blog site</p>
            <div className="h-6"></div>
            <p className="text-xl leading-loose px-24">We founded this website in 2023 to share out adventures,
              both personally and as a couple. We write about our average lives
              as Purdue students. There is often more than meets the eye with us,
              so we hope you enjoy reading all that we do :). 
            </p>
          </div>
          <img src="ourpic.png" className="max-h-96 w-1/3"/>
        </div>
        <p>Featured Blog</p>
        <p>Random Blog</p>
        <div className="h-12"></div>
        <div className="flex flex-row justify-around">
          <BlogBlock title="Nathan's most recent blog" img_link="nathan.png" id={recentNathan} />
          <BlogBlock title="Chloe's most recent blog" img_link="chloe.png" id={recentChloe}/>
          <BlogBlock title="Nathan + Chloe's most recent blog" img_link="chloe.png" id={recentCN}/>
        </div>
        <div className="h-12"></div>
      </div>
    </div>
  )
}
