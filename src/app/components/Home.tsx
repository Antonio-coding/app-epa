import React from 'react'
import Hero from './Hero'
import Feature from './Features'
import Depositions from './Depositions'
import Newsletter from './Newsletter'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Feature />
      <Depositions />
      <Newsletter />

    </div>
  )
}

export default Home