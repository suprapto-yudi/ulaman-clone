"use client"

import { motion, type Variants } from 'framer-motion'
// Impor data (path relatif, mundur 3 level)
import siteData from '../../../data/siteData.json'
// Impor komponen card kita
import FacilityCard from '@/components/ui/FacilityCard'

// Varian animasi container (untuk stagger)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Setiap item akan muncul dengan jeda 0.2 detik
    },
  },
}

// Varian animasi untuk setiap item (fade-in + slide-up)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function FacilitiesSection() {
  const { facilities } = siteData; // Ekstrak data fasilitas dari JSON

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. Konten Teks di Atas (Judul Section) */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants} // Kita bisa pakai ulang itemVariants untuk ini
        >
          <p className="font-serif text-primary uppercase tracking-widest text-sm">
            DISCOVER ULAMAN
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 leading-tight">
            Facilities & Services
          </h2>
          <p className="font-sans text-lg leading-relaxed text-foreground/80 mt-6">
            We provide world-class amenities to ensure your stay is nothing short of extraordinary.
          </p>
        </motion.div>

        {/* 2. Grid untuk Facility Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger saat 20% grid terlihat
        >
          {facilities.map((facility) => (
            // 3. Setiap item di-wrap dengan motion.div untuk animasi stagger
            <motion.div key={facility.id} variants={itemVariants}>
              <FacilityCard 
                icon={facility.icon as keyof typeof import('lucide-react').icons} // Pastikan tipe ikon-nya aman
                name={facility.name}
                description={facility.description}
              />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}
