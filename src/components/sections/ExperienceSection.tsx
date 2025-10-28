"use client"

import { motion, type Variants } from 'framer-motion'
// Impor data (path relatif, mundur 3 level)
import siteData from '../../../data/siteData.json'
import ExperienceCard, { itemVariants } from '@/components/ui/ExperienceCard'
import Button from '@/components/ui/Button'

// Varian animasi container (untuk stagger)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Setiap kartu akan muncul dengan jeda 0.15 detik
      delayChildren: 0.2,
    },
  },
}

export default function ExperienceSection() {
  const { experiences } = siteData; // Ekstrak data pengalaman dari JSON

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. Konten Teks di Atas (Judul Section) */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants} // Re-use itemVariants dari ExperienceCard
        >
          <p className="font-serif text-primary uppercase tracking-widest text-sm">
            EVENTS & EXPERIENCE
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 leading-tight">
            Curated Experiences for The Soul
          </h2>
        </motion.div>

        {/* 2. Grid untuk Experience Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger saat 20% grid terlihat
        >
          {experiences.map((experience) => (
            // Kita hanya perlu merender ExperienceCard di sini, karena animasinya sudah di dalam card
            <ExperienceCard 
              key={experience.id} 
              name={experience.name}
              imageUrl={experience.imageUrl}
              href={experience.href}
            />
          ))}
        </motion.div>
        
        {/* 3. Tombol "View All" di Bawah */}
        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <Button href="/experiences" variant="primary">
            View All Experiences
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
