import React from 'react'

const Services = () => {
  return (
    <div id="services" className="min-h-screen bg-white text-center p-6">
      <h1 className="text-4xl text-orange-500 mb-40 pt-20">OUR SERVICES</h1>
      <div className="flex justify-between px-20">
        <div className="border-2 border-gray-900 rounded-xl p-4 w-72 h-60 flex flex-col justify-between">
          <h2 className="font-bold">Header</h2>
          <p>Some text</p>
        </div>
        <div className="border-2 border-gray-900 rounded-xl p-4 w-72 h-60 flex flex-col justify-between">
          <h2 className="font-bold">Header</h2>
          <p>Some text</p>
        </div>
        <div className="border-2 border-gray-900 rounded-xl p-4 w-72 h-60 flex flex-col justify-between">
          <h2 className="font-bold">Header</h2>
          <p>Some text</p>
        </div>
      </div>
    </div>
  )
}

export default Services
