import React from 'react'
import './home.scss';
import News from '../../features/news/news'
import About from '../../features/about/About'
const Home = () => {
  return (
    <div>
      {/* <h1 className="mainHeader">TAKE SHARE</h1> */}
      <About/>
     <News/> 
    </div>
  )
}

export default Home
