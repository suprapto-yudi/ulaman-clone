// components/shared/Navbar.tsx
"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

// Ini bisa dipindah ke /data/siteData.json nanti
const navLinks = [
  { href: '/rooms', label: 'Rooms' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/dine', label: 'Dine' },
  { href: '/spa', label: 'Spa' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Set state true jika scroll Y > 10px
      setIsScrolled(window.scrollY > 10)
    }

    // Tambah event listener saat komponen di-mount
    window.addEventListener('scroll', handleScroll)

    // Hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${isScrolled ? 'bg-background shadow-md' : 'bg-transparent'}
        `}
      >
        <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl font-serif font-bold text-primary tracking-wider">
              ULAMAN
            </Link>

            {/* Navigasi Desktop */}
            <div className="hidden lg:flex lg:gap-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-sm font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Tombol Desktop */}
            <div className="hidden lg:flex">
              <Link
                href="/booking"
                className="px-6 py-2 bg-primary text-white text-sm font-medium uppercase tracking-widest hover:bg-opacity-90 transition-all"
              >
                Book Now
              </Link>
            </div>

            {/* Tombol Hamburger (Mobile) */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
                className="text-foreground"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-background lg:hidden"
          >
            <div className="flex justify-between items-center h-20 px-4 sm:px-6">
              <Link href="/" className="text-2xl font-serif font-bold text-primary tracking-wider" onClick={toggleMobileMenu}>
                ULAMAN
              </Link>
              <button
                onClick={toggleMobileMenu}
                aria-label="Close navigation menu"
                className="text-foreground"
              >
                <X size={28} />
              </button>
            </div>
            
            <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/booking"
                className="mt-8 px-8 py-3 bg-primary text-white text-lg font-medium uppercase tracking-widest hover:bg-opacity-90 transition-all"
                onClick={toggleMobileMenu}
              >
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}