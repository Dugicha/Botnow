import React from 'react'

const Pricing = () => {
  return (
    <div className="min-h-screen bg-black text-center p-6 text-white">
      <h1 className="text-4xl mb-20 text-orange-500">PRICING</h1>
      <div className="flex justify-between px-20">
        <div className="border-4 border-white rounded-xl p-4 w-80 h-96 flex flex-col justify-between items-center bg-black">
          <h2 className="font-bold text-xl mb-4">Plan 1</h2>
          <p className="mb-4">Description for Plan 1</p>
          <h3 className="font-bold text-2xl mb-4">$100</h3>
          <button className="bg-white text-black font-bold py-2 px-4 rounded">Buy Now</button>
        </div>
        <div className="border-4 border-white rounded-xl p-4 w-80 h-96 flex flex-col justify-between items-center bg-black">
          <h2 className="font-bold text-xl mb-4">Plan 2</h2>
          <p className="mb-4">Description for Plan 2</p>
          <h3 className="font-bold text-2xl mb-4">$200</h3>
          <button className="bg-white text-black font-bold py-2 px-4 rounded">Buy Now</button>
        </div>
        <div className="border-4 border-white rounded-xl p-4 w-80 h-96 flex flex-col justify-between items-center bg-black">
          <h2 className="font-bold text-xl mb-4">Plan 3</h2>
          <p className="mb-4">Description for Plan 3</p>
          <h3 className="font-bold text-2xl mb-4">$300</h3>
          <button className="bg-white text-black font-bold py-2 px-4 rounded">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
