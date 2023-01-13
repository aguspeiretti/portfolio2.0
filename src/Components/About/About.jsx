import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Letters from '../AnimateLetters/Letters'
import SkillsBar from '../SkillsBar/SkillsBar'
import "./About.scss"


function About() {
    const [letterClass , setLetterClass]=useState('text-animate')
    const [skills ,setSkills] = useState(false)
    const [show , setShow]=useState(false)

    useEffect(()=>{
      setTimeout(()=>{
        setShow(true)
      },500)
    },[])
   
    const cambio = ()=>{
      setSkills(!skills)}
   
    useEffect(()=>{
        setTimeout(()=>{
          setLetterClass("text-animate-hover")
        },3000)
      },[])
  return (
    <>
    <div className='aboutContainer'>
        <div className='texto'>
            <h1>
               <Letters letterClass={letterClass}
               strArray={["A","b","o","u","t"," ","m","e"]}
               idx={15}
               />
            </h1>
            <p>
            Hi there! My name is Agustin, and I am passionate and enthusiastic about creating on the web! My interest in development began when I decided to create a small website for a personal project with standard templates. Not being able to achieve the level of detail that I had I mind, I decided to get into the programming world, and since moment i did, I loved it! I like to write clean, tidy and work hard, I am currently looking to work in a place that allows me to grow, learn and progress in web development.
            </p>
            <button onClick={cambio}>Skills</button>
        </div>
     
    </div>
    {
      show ? <div className='cuboContenido'>
      {skills ? <SkillsBar />
      : <div className='cuboRotacion'>
      <div className='cara1'><i class="fa-brands fa-react"></i></div>
      <div className='cara2'><i class="fa-brands fa-html5"></i></div>
      <div className='cara3'><i class="fa-brands fa-css3-alt"></i></div>
      <div className='cara4'><i class="fa-brands fa-square-js"></i></div>
      <div className='cara5'><i class="fa-brands fa-git-alt"></i></div>
      <div className='cara6'><i class="fa-brands fa-bootstrap"></i></div>

    </div>

      }
    </div>
      :<div></div>
    }
    
    <Loader type='ball-scale-multiple' />
    </>
  )
}

export default About