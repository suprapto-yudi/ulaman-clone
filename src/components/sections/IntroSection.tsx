"use client"

import { motion, type Variants } from 'framer-motion'
import Button from '@/components/ui/Button' // Impor tombol kita

// Kita pakai varian yang sama dengan HeroSection agar konsisten
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Kolom kiri dan kanan akan muncul bergantian
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function IntroSection() {
  return (
    // Kita pindahkan id="intro" ke sini
    // py-24 (padding atas-bawah di mobile) dan lg:py-32 (di desktop)
    <section id="intro" className="py-24 lg:py-32 bg-background">
      <motion.div 
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        // Animasi ini akan aktif saat section masuk ke layar
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Trigger animasi saat komponen terlihat
        viewport={{ once: true, amount: 0.2 }} // Trigger sekali saat 20% terlihat
      >
        {/* Grid 1 kolom di mobile, 2 kolom di desktop (lg:grid-cols-2)
          items-start agar kedua kolom align di atas
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Kolom Kiri: Judul */}
          <motion.div variants={itemVariants}>
            <p className="font-serif text-primary uppercase tracking-widest text-sm">
              WELCOME TO ULAMAN
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 leading-tight">
              Redefining Luxury Eco Tourism
            </h2>
          </motion.div>

          {/* Kolom Kanan: Paragraf & Tombol */}
          <motion.div variants={itemVariants}>
            <p className="font-sans text-lg leading-relaxed text-foreground">
              Immerse yourself in a transformative architectural paradise where luxury meets natural beauty, inviting you to discover serenity and wonder.
            </p>
            <p className="font-sans text-lg leading-relaxed text-foreground mt-6">
              Ulaman is more than just a destination; it's a unique experience that blends eco-conscious living with unparalleled comfort, designed to harmonize with the surrounding rice fields, river, and jungle.
            </p>
            <Button href="/about" className="mt-8">
              Discover More
            </Button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}
