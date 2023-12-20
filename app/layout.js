"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { useTheme } from './theme'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const {theme}=useTheme()
  return (
    <html lang="en" data-theme={theme}>
      <body data-theme={theme} className={inter.className}>{children}</body>
    </html>
  )
}
