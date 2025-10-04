import React from 'react'

const Thumb = ({img, title}) => (
  <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer group">
    <img src={img} alt={title} className="w-full h-40 object-cover group-hover:scale-105 transform transition"/>
    <div className="p-2 bg-white/3">
      <div className="text-sm">{title}</div>
    </div>
  </div>
)

export default function Portfolio(){
  const items = [
    {img:'/hero.jpg', title:'Web Design'},
    {img:'/hero.jpg', title:'Mobile App UI'},
    {img:'/hero.jpg', title:'Dashboard Design'},
    {img:'/hero.jpg', title:'Ecommerce UI'},
    {img:'/hero.jpg', title:'Branding'},
    {img:'/hero.jpg', title:'Illustration'},
  ]
  return (
    <section id="portfolio" className="py-12">
      <h3 className="text-2xl font-bold text-center mb-6">My <span className="text-accent-blue">Portfolio</span></h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it, idx) => <Thumb key={idx} {...it} />)}
      </div>
    </section>
  )
}
