// src/app/page.tsx

// Import Sections yang sudah kita buat
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import RoomsSection from "@/components/sections/RoomsSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

export default function Home() {
  return (
    // Menggunakan tag <main> di sini (di dalam children) adalah cara yang paling semantik.
    <main> 
      {/* 1. HERO (Full screen, Video Background) */}
      <HeroSection />
      
      {/* 2. INTRO (Welcome Message) */}
      <IntroSection />
      
      {/* 3. ROOMS (Embla Carousel Slider) */}
      <RoomsSection />

      {/* 4. FACILITIES (Grid 3 Kolom Ikon) */}
      <FacilitiesSection />

      {/* 5. EXPERIENCES (Grid 3 Kolom Gambar) */}
      <ExperienceSection />
      
      {/* Placeholder Tambahan (Opsional, bisa dihapus) */}
      <div className="h-48 bg-gray-200" />
    </main>
  );
}
