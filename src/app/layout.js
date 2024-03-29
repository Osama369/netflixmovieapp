import Header from './components/Header'
import './globals.css'

import {Mulish} from 'next/font/google'


const mul = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

//  yaha par render hoga  page
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mul.className}>
      <body>
         <Header/>
           {children}
      </body>
    </html>
  )
}
