import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">About <span className="text-accent-blue">Me</span></h2>
      <div className="bg-white/3 p-6 rounded-xl shadow-inner">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 text-gray-200">
            <p className="mb-4">I’m a professional UI/UX designer with strong skills in user interface design, user experience strategy, wireframing, prototyping, and design tools like Figma and Adobe XD. I've been working in this field for several years, delivering visually appealing and user-friendly designs.</p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><strong>Education:</strong> BSC in CSE (ongoing)</li>
              <li><strong>Experience:</strong> UI/UX design, web interfaces, prototypes</li>
              <li><strong>Tools:</strong> Figma, Adobe Illustrator, Photoshop</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-40 h-40 bg-deep-navy/50 rounded-xl flex items-center justify-center text-sm text-gray-300 text-center p-4">
              Friendly, detail oriented & passionate about design.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
