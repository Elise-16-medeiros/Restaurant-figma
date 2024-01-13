import type { Metadata } from 'next'
import { Josefin_Sans, Cormorant_Infant } from 'next/font/google'
import './globals.css'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: '400', 
  variable: '--josefin-font'
  
})

const cormorant = Cormorant_Infant({
  subsets: ['latin'],
  weight: '400',
  variable: '--cormorant-font',
})

export const metadata: Metadata = {
  title: 'Restaurant Botticelli',
  description: 'Template inspired by figma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${josefin.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  )
}
