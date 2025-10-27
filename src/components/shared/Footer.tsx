// src/components/shared/Footer.tsx

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-accent text-background/80 py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Ulaman Bali Clone. Dibuat untuk portfolio.</p>
        <p className="text-sm mt-2">Ini adalah klon, situs aslinya ada di ulamanbali.com</p>
      </div>
    </footer>
  )
}

export default Footer