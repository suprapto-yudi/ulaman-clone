// app/layout.tsx
import type { Metadata } from 'next'
import { Jost, Cormorant_Garamond } from 'next/font/google'
import './globals.css' // Pastikan file ini di-update (lihat di bawah)
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

// Setup font
const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-jost', // Variabel CSS untuk body
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant', // Variabel CSS untuk heading
})

export const metadata: Metadata = {
  title: 'Ulaman Bali - Klon oleh Muhamad Yudi Suprapto',
  description: 'Kloning UI/UX Ulaman Bali untuk tes teknis Front-End.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Menggabungkan variabel font.
        bg-background dan text-foreground adalah warna kustom dari tailwind.config
      */}
      <body 
        className={`${jost.variable} ${cormorant.variable} font-sans bg-background text-foreground`}
      >
        <Navbar />
        {/* HAPUS tag <main> di sini. children (yaitu page.tsx) akan merender tag <main> sendiri. */}
        {children}
        <Footer />
      </body>
    </html>
  )
}