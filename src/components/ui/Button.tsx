import Link from 'next/link'
import { twMerge } from 'tailwind-merge' // (Opsional, tapi bagus untuk gabung class)
// Jika belum install: npm install tailwind-merge

type ButtonProps = {
  href: string
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'outline' // Kita buat 2 varian
}

export default function Button({ 
  href, 
  children, 
  className, 
  variant = 'primary' 
}: ButtonProps) {

  const baseStyle = "px-8 py-3 text-sm font-medium uppercase tracking-widest transition-all duration-300 inline-block"

  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white"
  }

  // twMerge dipakai agar kita bisa menimpa style dari props
  const classes = twMerge(baseStyle, variants[variant], className)

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
