import React from 'react'

const products = [
  { id: 1, name: "Top Flúor", price: 8000, image: "https://via.placeholder.com/300x400?text=Top+Fluor" },
  { id: 2, name: "Pantalón Polar", price: 15000, image: "https://via.placeholder.com/300x400?text=Polar" },
  { id: 3, name: "Remera Oversize", price: 9000, image: "https://via.placeholder.com/300x400?text=Oversize" },
  { id: 4, name: "Buzo Crop", price: 14000, image: "https://via.placeholder.com/300x400?text=Crop" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">TuckiClub</h1>
      <p className="text-center text-xl mb-10">Comprá 2 y pagá 1 en productos seleccionados</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map(product => (
          <div key={product.id} className="bg-neutral-900 p-4 rounded-2xl shadow-md hover:scale-105 transition-transform">
            <img src={product.image} alt={product.name} className="rounded-xl mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-pink-400">${product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}