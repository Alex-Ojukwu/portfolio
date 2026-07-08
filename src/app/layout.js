import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alex-Ojukwu Nduka — Full-Stack Developer & AI/ML Engineer',
  description:
    'Portfolio of Alex-Ojukwu Nduka: full-stack developer building fast, beautiful web apps and AI-powered products with Next.js, React, and Node.js.',
  themeColor: '#000000',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
