// Hapus 'import Image from "next/image";' yang lama
import HeroSection from '@/components/sections/HeroSection'
// Impor komponen baru kita
import IntroSection from '@/components/sections/IntroSection'

export default function Home() {
  return (
    <main>
      {/* Navbar dan Footer sudah ada di layout.tsx, 
        jadi kita tidak perlu menambahkannya di sini.
        Kita hanya perlu menambahkan section-section halaman.
      */}
      
      <HeroSection />
      
      {/* Kita tambahkan ID ini agar "Scroll Down" di HeroSection 
        bisa berfungsi jika kita mau.
        Section berikutnya (Intro) akan kita letakkan di sini.
      */}
      <IntroSection />

      {/* Placeholder untuk FacilitiesSection */}
      <FacilitiesSection />

      {/* Placeholder untuk section-section lain */}
      <div className="h-screen bg-gray-200" />
      <div className="h-screen bg-background" />

    </main>
  )
}
