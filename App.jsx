import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default function App(){
  return (
    <div className="min-h-screen bg-hero-pattern bg-cover bg-center">
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        <footer className="text-center text-sm text-gray-400 py-8">
          © {new Date().getFullYear()} — All rights reserved
        </footer>
      </main>
    </div>
  )
}
