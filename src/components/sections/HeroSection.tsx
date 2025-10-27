// components/sections/HeroSection.tsx
"use client"

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link' // Kita pakai Link jika "scroll down" mau di-link ke #section
import { ArrowDown } from 'lucide-react'

// Varian animasi untuk Framer Motion
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Jeda antar animasi anak-anaknya
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 }, // Mulai dari transparan & 20px di bawah
  visible: {
    opacity: 1,
    y: 0, // Kembali ke posisi 0
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 1. Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="/images/hero-fallback.jpg" // Opsional: gambar pengganti saat video loading
      >
        {/* Menggunakan video yang sudah di-download ke /public/videos/ */}
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Overlay Gelap */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* 3. Konten Teks & Animasi */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo Ulaman (SVG) */}
        <motion.div variants={itemVariants}>
          <Image
            src="/images/ulaman-logo-reversed.svg" // Logo dari /public/images/
            alt="Ulaman Logo"
            width={350} // Sesuaikan ukurannya agar proporsional
            height={100}
            priority // Penting untuk LCP (Largest Contentful Paint)
            className="h-auto w-[250px] md:w-[350px]"
          />
        </motion.div>

        {/* Judul Utama */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mt-6 max-w-4xl"
        >
          EXPERIENCE A BLEND OF NATURE, COMFORT AND LUXURY LIKE NEVER BEFORE.
        </motion.h1>
      </motion.div>

      {/* 4. Indikator "Scroll Down" */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        // Animasi fade-in sederhana untuk scroll indicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {/* Di situs aslinya, ini adalah link ke #intro
          Kita bisa buat ini jadi <Link href="#intro"> 
        */}
        <span className="font-sans text-xs text-white uppercase tracking-widest mb-2">
          Scroll Down
        </span>
        {/* Animasi panah naik-turun */}
        <motion.div
          animate={{ y: [0, 8, 0] }} // Bergerak 8px ke bawah lalu kembali
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut',
          }}
        >
          <ArrowDown className="h-6 w-6 text-white" />
        </motion.div>
      </motion.div>
    </section>
  )
}