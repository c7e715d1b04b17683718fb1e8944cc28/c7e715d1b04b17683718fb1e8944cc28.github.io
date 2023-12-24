import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-100">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleTagManager gtmId='GTM-NKZ4VKWK' />
    </html>
  )
}
