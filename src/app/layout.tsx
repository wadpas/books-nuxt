import type { Metadata } from 'next'
import { Roboto, Lato } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/layout/Header'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Freedom',
  description: 'Freedom store',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn('font-sans antialiased', roboto.className)}>
        <Header />
        <main className='flex flex-col min-h-screen bg-primary-foreground'>
          <div className='flex-1 w-full p-4 mx-auto bg-background min-w-[320px] max-w-[1600px]'>{children}</div>
        </main>
      </body>
    </html>
  )
}
