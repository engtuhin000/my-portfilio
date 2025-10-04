import React from 'react'
import { motion } from 'framer-motion'

const Card = ({title, children, highlighted}) => (
  <motion.div whileHover={{ y: -6 }} className={`p-6 rounded-xl shadow-lg ${highlighted ? 'border-2 border-accent-blue' : 'bg-white/3'}`}>
    <h4 className="text-lg font-semibold mb-3">{title}</h4>
    <p className="text-gray-300 text-sm">{children}</p>
    <div className="mt-4">
      <button className="px-4 py-2 bg-accent-blue text-deep-navy rounded-md">Hire Me</button>
    </div>
  </motion.div>
)

export default function Services(){
  return (
    <section id="services" className="py-12">
      <h3 className="text-2xl font-bold text-center mb-6">My <span className="text-accent-blue">Services</span></h3>
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Web Design">Responsive web design, landing pages and UI systems.</Card>
        <Card title="UI / UX Design" highlighted>Complete UI/UX design solutions, prototyping & usability testing.</Card>
        <Card title="Graphic Design">Logos, branding, social assets and marketing materials.</Card>
      </div>
    </section>
  )
}
