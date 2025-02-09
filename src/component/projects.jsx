import React from 'react'
import project from './Data/projects.json';

const projects = () => {
  return (
    <>
      <div className="container projects my-3"></div>
      <h1>Projects</h1>
       <div className="row">
  {project.map((data) => (
    <>
    <div key={data.id}>
    <div className="card" style={{width:'18rem'}}>
  <img src={data.imageSrc} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
   </div>
  </div>
    </div>
    </>

  ))}
       </div>
       
    </>
  )
}

export default projects
