"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { useTheme } from './theme'
import { QueryClient, QueryClientProvider } from 'react-query'



const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const queryClient = new QueryClient()
  const {theme}=useTheme()
  return (
    <html lang="en" data-theme={theme}>
      <body data-theme={theme} className={inter.className}>
      <QueryClientProvider client={queryClient}>
        {children}
      </ QueryClientProvider>
        </body>
    </html>
  )
}
