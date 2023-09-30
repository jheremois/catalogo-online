import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FS tech - catalogo',
  description: 'Descubre el catalogo de FS tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" m-auto max-w-md">
          {/* <Header/> */}
          {/* <div className="h-14"></div> */}
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
