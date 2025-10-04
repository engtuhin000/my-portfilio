import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-12">
      <div>
        <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-4xl md:text-5xl font-bold leading-tight">
          Hey! I'm <span className="text-accent-blue">Mehedi Hasan Tuhin</span>
        </motion.h1>
        <motion.p initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="mt-4 text-gray-300 max-w-xl">
          And I'm a <span className="text-muted-cyan font-semibold">iOS UI UX Designer</span>. I design user interfaces, prototypes and craft clean, usable experiences.
        </motion.p>
        <div className="mt-6 flex gap-3">
          <a href="/resume.pdf" className="px-4 py-2 bg-accent-blue rounded-md text-deep-navy font-semibold shadow hover:brightness-105 transition">Download CV</a>
          <a href="#portfolio" className="px-4 py-2 border border-accent-blue rounded-md text-accent-blue hover:bg-accent-blue/10 transition">Portfolio</a>
        </div>
      </div>

      <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay:0.25}} className="relative flex justify-center">
        <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border-4 border-accent-blue/40 shadow-lg">
          <img src="/hero.jpg" alt="Mehedi Hasan Tuhin" className="object-cover w-full h-full"/>
        </div>
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full border-4 border-muted-cyan/60 shimmer"></div>
      </motion.div>
    </section>
  )
}
