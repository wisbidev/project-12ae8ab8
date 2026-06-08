import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'aiteam — AI Team tự động build phần mềm qua Telegram',
  description: 'Nền tảng AI tự động build phần mềm qua Telegram. Không cần thuê dev.',
  openGraph: {
    title: 'aiteam — AI Team',
    description: 'AI Team tự động build phần mềm qua Telegram',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="bg-background text-text antialiased">
        {children}
      </body>
    </html>
  )
}
