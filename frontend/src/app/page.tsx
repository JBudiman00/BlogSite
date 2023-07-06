'use client'
import BlogBlock from './components/blogblock'
import { useEffect, useState } from 'react'
import ArticleItem from './interface/articleitem';
import axios from 'axios';
import BlogHighlight from './components/bloghighlight';

export default function Home() {
  //UseState to store article ID for links to other pages 
  const [recentNathan, setRecentNathan] = useState<number>(0);
  const [recentChloe, setRecentChloe] = useState<number>(0);
  const [recentCN, setRecentCN] = useState<number>(0);
  const [random, setRandom] = useState<ArticleItem | null>(null);
  const [highlight, setHighlight] = useState<ArticleItem | null>(null);

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
            setRecentChloe(articleChloe.ID);
            //Get Chloe + Nathan's most recent blog
            const cnList = articleList.filter((item: ArticleItem) => item.type === "ChloeNathan")
            const articleCN = getRecent(cnList);
            setRecentCN(articleCN.ID);

            //Get article highlight
            articleList.forEach((i: ArticleItem) => {
              if(i.is_featured === true){
                setHighlight(i);
                return;
              }
            });

            //Get random article
            const randNum = Math.floor(Math.random() * (articleList.length-1));
            if(articleList[randNum].type === "ChloeNathan"){
              articleList[randNum].type = "Chloe+Nathan"
            }
            setRandom(articleList[randNum]);
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
    <div className="flex justify-center w-full text-[#82614A]">
      <div className="w-2/3">
        <div className="h-6"></div>
        <div className="flex flex-row">
          <div className="bg-[#D0BCA0] pt-12 px-6 rounded-xl">
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
        <div className="h-6"></div>
        <BlogHighlight data={highlight} title="Featured Blog"/>
        <div className="h-6"></div>
        <BlogHighlight data={random} title="Random Blog"/>
        <div className="h-12"></div>
          <div className="flex flex-row justify-around">
            <BlogBlock title="Nathan's most recent blog" img_link="nathan.png" id={recentNathan} />
            <BlogBlock title="Chloe's most recent blog" img_link="chloe.png" id={recentChloe}/>
            <BlogBlock title="Nathan + Chloe's most recent blog" img_link="us.png" id={recentCN}/>
          </div>
        <div className="h-12"></div>
      </div>
    </div>
  )
}
