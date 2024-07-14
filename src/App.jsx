import React from 'react'
import Header from './Header'
import Content from './Content'
import { gsap,Power3 } from 'gsap';

const App = () => {
  const tl =  gsap.timeline() 
  let ease = Power3.easeOut()
  return (
    <div>
      <Header timeline={tl} ease={ease}/>
      <Content/>
    </div>
  )
}

export default App
