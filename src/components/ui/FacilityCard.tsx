// "use client" tidak perlu di sini, karena ini komponen display murni
import { icons } from 'lucide-react'; // Impor objek 'icons'

// 1. Tentukan tipe props
type FacilityCardProps = {
  // 2. 'icon' adalah string, tapi harus salah satu nama ikon yang valid
  icon: keyof typeof icons; 
  name: string;
  description: string;
};

export default function FacilityCard({ icon, name, description }: FacilityCardProps) {
  // 3. Ambil komponen Ikon spesifik dari objek 'icons'
  //    Contoh: jika prop 'icon' adalah "Wifi", LucideIcon akan menjadi komponen <Wifi />
  const LucideIcon = icons[icon];

  // Fallback jika nama ikon salah (seharusnya tidak terjadi jika JSON benar)
  if (!LucideIcon) {
    return <div>Icon not found</div>;
  }

  return (
    // Kita akan buat layout card dengan flex
    // Di situs aslinya, itemnya rata kiri, jadi kita pakai flex biasa
    <div className="flex gap-4 items-start">
      {/* Kolom Ikon */}
      <div className="shrink-0">
        <LucideIcon className="h-10 w-10 text-primary" strokeWidth={1.5} />
      </div>
      
      {/* Kolom Teks */}
      <div>
        <h3 className="font-serif text-xl md:text-2xl text-foreground font-medium">
          {name}
        </h3>
        <p className="font-sans text-base text-foreground/80 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}
