import React from 'react'
import './home.scss';
import News from '../../features/news/News'
import About from '../../features/about/About'
const Home = () => {
  return (
    <div>
      <About/>
      <News/> 
    </div>
  )
}

export default Home
