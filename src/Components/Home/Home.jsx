import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Letters from '../AnimateLetters/Letters'
import "./Home.scss"
import fondo from "../../Assets/images/a.gif"
import { Link } from "react-router-dom"
import Loader from 'react-loaders'

function Home() {

  const [letterClass , setLetterClass]=useState('text-animate')
  const nameArray = [' ','A','g','u','s',' ','P','e','i','r','e','t','t','i']
  const jobArray = ['W','e','b ',' ','D','e','v','e','l','o','p','e','r ']
  const [show , setShow]=useState(false)

    useEffect(()=>{
      setTimeout(()=>{
        setShow(true)
      },4000)
    },[])

  useEffect(()=>{
    setTimeout(()=>{
      setLetterClass("text-animate-hover")
    },4000)
  },[])

  return (
    <>
    <div  className='imagen'>
    <img src={fondo} alt="" />
    </div>
    <div className='contenedorPrincipal'>
    <div className='texto'>
    <h1>
      <span className={letterClass}>H</span>
      <span className={`${letterClass} _12`}>i</span> 
      <br/>
      <span className={`${letterClass} _13`}>I</span> 
      <span className={`${letterClass} _14`}>'m </span> 
      <Letters letterClass={letterClass }
       strArray={nameArray} 
       idx={15}/>
      <br/>
      <Letters letterClass={letterClass }
       strArray={jobArray} 
       idx={22}/> 
      </h1>      
      <h2>Frontend Developer / Javascript / React</h2>
      <Link to={"/Contact"}><button>Contact me</button></Link>
    </div>   
    
  
  </div>

  {/* {
    show ?<div  className='imagen'>
    <img src={fondo} alt="" />
</div>
: <div></div>
  } */}
  
  <Loader type='ball-scale-multiple' />
  </>
  )
}

export default Home