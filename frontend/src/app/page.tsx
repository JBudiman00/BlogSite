import BlogBlock from './components/blogblock'

export default function Home() {
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
          <BlogBlock title="Nathan's most recent blog" img_link="nathan.png"/>
          <BlogBlock title="Chloe's most recent blog" img_link="chloe.png" />
          <BlogBlock title="Nathan + Chloe's most recent blog" img_link="chloe.png" />
        </div>
        <div className="h-12"></div>
      </div>
    </div>
  )
}
