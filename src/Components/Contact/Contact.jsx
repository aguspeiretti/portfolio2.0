import React, { useEffect, useRef, useState } from 'react'
import Letters from '../AnimateLetters/Letters'
import "./Contact.scss"
import emailjs from '@emailjs/browser';
import MapView from '../mapView/MapView';
import Loader from 'react-loaders';


function Contact() {
    const [letterClass , setLetterClass]=useState('text-animate')
    const refForm = useRef()
    const position = [51.505, -0.09]

    useEffect(()=>{
        setTimeout(()=>{
          setLetterClass("text-animate-hover")
        
        },3000)
      },[])

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
        .sendForm(
        'service_hewo731',
        'template_naw0dpo',
        refForm.current,
        "ooAdoZthGvhlQSeeW"
        )
        .then(()=>{
            alert('message succsesfuly sen!')
            window.location.reload(false)
        },
        ()=>{
            alert('fail to send the message')
        }
        )
    }  
    return (
      <>
      <div className='ContactContainer'>
      <div className='texto'>
          <h1>
             <Letters letterClass={letterClass}
             strArray={["C","o","n","t","a","c","t"," ","m","e"]}
             idx={15}
             />
          </h1>
          <p>
          I am currently looking for new opportunities, my email is always open, either for a job offer or just to say hi! I will try to reply ASAP.
          </p>
          
          
      </div>
      <div className='ContactForm'>
        <form ref={refForm} onSubmit={sendEmail}>
            <ul>
                <div className='one'>
                <li className='half1'>
                    <input type="text" name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                    <input type="email" name='email' placeholder='Email' required />
                </li>
                </div>
                <li >
                    <input type="text" name='subjet' placeholder='Subjet' required />
                </li>
                <li>
                    <textarea placeholder='Message' name='message' required></textarea>
                </li>
                <li>
                    <input type="submit" className='inputButton' value="SEND" />
                </li>
            </ul>
            </form>
          </div>
        
        </div>
        <div className='information'>
            Agus Peiretti
            <br/>
            Cordoba-Argentina
            <br/>
            <span>agupeiretti@gmail.com</span>
        </div>
        <MapView />
        <Loader type='ball-scale-multiple' />
     </>
  )
}

export default Contact