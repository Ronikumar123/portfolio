import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/resume.pdf'
import data from './Data/picture.jpg'
import Typed from 'typed.js';


const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {

    const options = {

      strings:["Welcome to my profile","My Name is Roni Kumar","I'm web developer","I have complete some projects"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }

    const typed = new Typed(typedRef.current, options)
  
    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <>
  <div className='container home'>
  <div className='left'>
    <h1 ref={typedRef}>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, et!
      </h1>
    <a href={pdf}  download="resume.pdf" className='btn btn-outline-warning my-4'>Download Resume</a>
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
