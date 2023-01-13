import React, { useEffect, useState } from "react"
import Loader from "react-loaders"
import Letters from "../AnimateLetters/Letters"
import ProyectosN from "../proyectos/ProyectosN"
import SliderImg from "../Slider/SliderImg"
import "./Proyects.scss"

export default function Proyects() {
  const [letterClass, setLetterClass] = useState("text-animate")
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1000)
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
      setShow(true)
    }, 3000)
  }, [])
  return (
    <>
      <div className="ProyectContainer">
        <div className="texto">
          <h1>
            <Letters
              letterClass={letterClass}
              strArray={[
                "S",
                "o",
                "m",
                "e",
                " ",
                "p",
                "r",
                "o",
                "y",
                "e",
                "c",
                "t",
                "s",
              ]}
              idx={15}
            />
          </h1>
        </div>
      </div>
      {show ? <ProyectosN /> : <div></div>}
      <Loader type="ball-scale-multiple" />
    </>
  )
}
