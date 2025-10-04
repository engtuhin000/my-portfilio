import React from 'react'

export default function Header(){
  return (
    <header className="py-6">
      <div className="flex items-center justify-between">
        <div className="text-white flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-accent-blue to-muted-cyan rounded-full flex items-center justify-center font-bold text-deep-navy">TU</div>
          <div>
            <div className="text-sm">Tuhin UI UX</div>
            <div className="text-xs text-gray-300">Portfolio</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-gray-200">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  )
}
