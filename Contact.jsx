import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <h3 className="text-2xl font-bold text-center mb-6">
        Contact <span className="text-accent-blue">Me</span>
      </h3>
      <div className="max-w-2xl mx-auto bg-white/3 p-6 rounded-xl text-center">
        <p className="text-gray-300 mb-4">
          You can reach me directly via email:
        </p>
        <a 
          href="mailto:youremail@example.com" 
          className="inline-block px-6 py-3 bg-accent-blue text-deep-navy font-semibold rounded-md shadow hover:brightness-105 transition"
        >
          Send Email
        </a>
        <p className="mt-4 text-sm text-gray-400">
          (Clicking the button will open your email app)
        </p>
      </div>
    </section>
  )
}
