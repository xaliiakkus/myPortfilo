import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: ' Ali Akkuş Portfolio',
  description: 'This is my portfolio website. I am a Frontend developer with a passion for building beautiful and functional websites.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ inter.style}>{children}</body>
    </html>
  )
}
