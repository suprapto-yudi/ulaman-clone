"use client"

import { useCallback } from 'react'
import { motion, type Variants } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

// Impor data JSON dan komponen kita
import siteData from '../../../data/siteData.json'
import RoomCard from '@/components/ui/RoomCard'
import Button from '@/components/ui/Button'

// Varian animasi fade-in (sama seperti IntroSection)
const fadeInVariants: Variants = {
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

export default function RoomsSection() {
  // 1. Setup hook Embla Carousel
  //    loop: true -> agar bisa berputar terus
  //    align: 'start' -> slide akan menempel di kiri
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

  // 2. Fungsi untuk tombol navigasi
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Konten Teks di Atas */}
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="font-serif text-primary uppercase tracking-widest text-sm">
            ACCOMMODATION
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 leading-tight">
            THE ROOMS
          </h2>
          <p className="font-sans text-lg leading-relaxed text-foreground mt-6">
            All of our villas and rooms have their own unique charm. Ulaman offers a variety of luxurious accommodations, each designed to immerse guests in nature's tranquility and beauty.
          </p>
        </motion.div>

        {/* Wrapper untuk Slider dan Tombol Navigasi */}
        <motion.div 
          className="relative mt-16"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }} // Muncul setelah teks
        >
          {/* 3. Viewport Embla (Container yang terlihat) */}
          <div className="overflow-hidden" ref={emblaRef}>
            {/* 4. Kontainer Embla (Container yang di-scroll) */}
            <div className="flex -ml-4">
              {/* 5. Mapping Data ke Slide */}
              {siteData.rooms.map((room) => (
                <div 
                  key={room.id} 
                  // Ini kuncinya:
                  // basis-full -> 1 slide per view (mobile)
                  // md:basis-1/2 -> 2 slide per view (tablet)
                  // lg:basis-[40%] -> 2.5 slide per view (desktop), persis seperti aslinya
                  className="grow-0 shrink-0 basis-full md:basis-1/2 lg:basis-[40%] pl-4"
                >
                  <RoomCard 
                    name={room.name}
                    description={room.description}
                    imageUrl={room.imageUrl}
                    href={room.slug}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 6. Tombol Navigasi Slider */}
          <button
            onClick={scrollPrev}
            aria-label="Previous room"
            className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 
                       bg-white text-primary rounded-full p-3 shadow-lg 
                       hover:bg-primary hover:text-white transition-all duration-300
                       hidden lg:block" // Sembunyikan di mobile
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next room"
            className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 
                       bg-white text-primary rounded-full p-3 shadow-lg 
                       hover:bg-primary hover:text-white transition-all duration-300
                       hidden lg:block" // Sembunyikan di mobile
          >
            <ArrowRight size={24} />
          </button>
        </motion.div>

        {/* Tombol "View All" di Bawah */}
        <motion.div 
          className="text-center mt-12"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Button href="/rooms" variant="outline">
            View All Rooms
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
