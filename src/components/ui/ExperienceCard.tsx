import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'

// Kita ekspor varian ini agar bisa di-stagger oleh parent
export const itemVariants: Variants = {
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

type ExperienceCardProps = {
  name: string
  imageUrl: string
  href: string
}

export default function ExperienceCard({ name, imageUrl, href }: ExperienceCardProps) {
  return (
    <motion.div 
      className="flex flex-col group" 
      variants={itemVariants} // Terapkan varian animasi
    >
      {/* Gambar */}
      <div className="overflow-hidden">
        <Link href={href}>
          <Image
            src={imageUrl}
            alt={name}
            width={800}
            height={600}
            className="w-full h-auto object-cover aspect-[4/3] 
                       transform transition-transform duration-500 ease-in-out 
                       group-hover:scale-105" // Efek zoom saat hover
          />
        </Link>
      </div>
      
      {/* Konten Teks */}
      <div className="py-6 text-center"> {/* Kunci: text-center */}
        <Link href={href}>
          <h3 className="font-serif text-3xl md:text-4xl text-foreground 
                         transition-colors duration-300 hover:text-primary">
            {name}
          </h3>
        </Link>
        <Link 
          href={href} 
          className="font-sans text-sm text-primary uppercase 
                     tracking-widest mt-3 inline-block hover:underline"
        >
          Discover
        </Link>
      </div>
    </motion.div>
  )
}
