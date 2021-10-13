import React from 'react'
import './home.scss';
import News from '../../features/news/News'
import Navbar from '../../features/navbar/Navbar'
import About from '../../features/about/About'
const Home = () => {
  return (
    <div>
      
      <Navbar/>
      {/* <h1 className="mainHeader">TAKE SHARE</h1> */}
      <About/>
     <News/> 
    </div>
  )
}

export default Home
