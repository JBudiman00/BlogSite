import { Raleway } from 'next/font/google'
import NavBar from '../components/navbar'
import BottomBar from '../components/bottombar'
import './globals.css'

const inter = Raleway({ weight: "500", subsets: ["latin"]})

export const metadata = {
  title: 'Blog Website',
  description: 'Nathan + Chloe Blog Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <BottomBar />
      </body>
    </html>
  )
}
