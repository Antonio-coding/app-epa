import React from 'react'
import Hero from './Hero/Hero'
import Feature from './Features/Feature'
import Depositions from './Depositions/Depositions'
import Newsletter from './Newsletter/Newsletter'

const Home = () => {
  return (
    <div className="overflow-hidden">
     <Hero />
     <Feature/>
     <Depositions />
     <Newsletter />
     
      </div>
  )
}

export default Home