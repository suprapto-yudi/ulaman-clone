import Image from 'next/image'
import Link from 'next/link'

type RoomCardProps = {
  name: string
  description: string
  imageUrl: string
  href: string
}

export default function RoomCard({ name, description, imageUrl, href }: RoomCardProps) {
  return (
    <div className="flex flex-col group">
      {/* Gambar */}
      <div className="overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={800}
          height={600}
          className="w-full h-auto object-cover aspect-4/3 transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      
      {/* Konten Teks */}
      <div className="py-6">
        <Link href={href}>
          <h3 className="font-serif text-2xl md:text-3xl text-foreground transition-colors duration-300 hover:text-primary">
            {name}
          </h3>
        </Link>
        <p className="font-sans text-base text-foreground mt-2">
          {description}
        </p>
        <Link href={href} className="font-sans text-sm text-primary uppercase tracking-widest mt-4 inline-block hover:underline">
          Discover
        </Link>
      </div>
    </div>
  )
}
