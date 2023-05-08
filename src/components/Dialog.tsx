import React from 'react'

const Dialog = () => {
  return (
    <div className="w-96 px-8 py-4 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center">
      <div>
      <h1 className="text-2xl mb-4">The message you want goes in here.</h1>
      <button className="text-base border-2 border-black rounded-3xl p-2.5 bg-[#A6FAFF] shadow-[2px_2px_0px_rgba(0,0,0,1)]">Enabled</button>
      </div>
    </div>
  )
}

export default Dialog