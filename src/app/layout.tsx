import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { pretendard, metropolis, roboto, figtree } from '@/styles/theme'
import './globals.css'

export const metadata: Metadata = {
  title: 'Spotlite Design System',
  description: 'A modern design system built with Next.js and Material-UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${metropolis.variable} ${pretendard.variable} ${roboto.variable} ${figtree.variable} font-metropolis`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
