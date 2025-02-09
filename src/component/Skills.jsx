import React from 'react';
import skills from './Data/skills.json';

const Skills = () => {
  return (
    <div className='container skills'>
      <h1>SKILLS</h1>
      <div className="items" >

      {skills.map((data)=>(
        <>
       <div className="item" key={data.id}>
       <img src= {`/assets/Images/${data.imageSrc}`} alt="" />
       <h3>{data.title}</h3>
    </div>

      
      </>))}
      </div>

    </div>
  )
};

export default Skills;
