import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Strips from './components/Strips'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full overflow-x-hidden  bg-zinc-900 font-["Satoshi_Variable"]'>
      <Navbar />
      <Work />
      <Strips />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
