import React from 'react'
import pdf from '../pdf/resume.pdf'
import data from './Data/picture.jpg'

const Home = () => {
  return (
    <>
  <div className='container home'>
  <div className='left'>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, et!</h1>
    <a href={pdf}  download="resume.pdf" className='btn btn-outline-warning'>Download Resume</a>
  </div>
  <div className='right'>

    <div className='img'>
      <img src={data} alt='' />

    </div>
  </div>
  
  </div>
    </>
  )
}

export default Home
