import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, pct}) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm text-gray-300 mb-1">
      <span>{name}</span>
      <span>{pct}%</span>
    </div>
    <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
      <motion.div initial={{width:0}} animate={{width: `${pct}%`}} transition={{duration:1}} className="h-3 bg-gradient-to-r from-accent-blue to-muted-cyan"></motion.div>
    </div>
  </div>
)

export default function Skills(){
  return (
    <section id="skills" className="py-12">
      <h3 className="text-2xl font-bold text-center mb-6">My <span className="text-accent-blue">Skills</span></h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Skill name="Figma" pct={90} />
          <Skill name="Adobe Illustrator" pct={70} />
          <Skill name="React" pct={60} />
          <Skill name="CSS" pct={75} />
        </div>
        <div>
          <Skill name="Adobe Photoshop" pct={85} />
          <Skill name="JavaScript" pct={50} />
          <Skill name="HTML5" pct={90} />
          <Skill name="Tailwind CSS" pct={80} />
        </div>
      </div>
    </section>
  )
}
