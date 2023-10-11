import React from 'react'
import './App.css'

import Header from './component/Header'
import WhatWeOffer from './component/offer/WhatWeOffer'

function App() {


  return (
    <div className='w-screen h-auto flex flex-auto flex-col'>
      <Header />
      <div className='w-screen h-auto items-center'>
        <WhatWeOffer />
        <section className="ready-for-dev-container flex justify-center  py-20 bg-bgColorLight">
          <div className="ready-for-dev flex flex-col text-center">
            <h3>Ready to try different work experience now?</h3>
            <p>Get the best  working experience that you never feel  before</p>
            <div className='flex justify-center'>
              <button className='bg-bgColor'>SIGN UP NOW</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
