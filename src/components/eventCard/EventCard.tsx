import React from 'react'

const EventCard = () => {
  return (
    <div className="bg-purple-100 w-screen h-screen pt-6">
    <div className="flex shadow-sm rounded bg-gray-100 w-1/3 px-4 py-5 justify-around items-center">
    <img className="rounded-full w-32" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" alt="" />
    <div className="px-5">
      <h3 className="text-lg font-bold">Erin Lindford</h3>
      <span>Product engineer</span>
      {/* <button className="border-2 border-purple-300 text-purple-500 rounded px-4 py-2">Message</button> */}
    </div>
  </div>
  </div>
  )
}

export default EventCard
