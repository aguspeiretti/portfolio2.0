import React from "react"
import "./proyectosN.scss"
import img1 from "../../Assets/images/ak1.png"
import img2 from "../../Assets/images/aku.png"
import img3 from "../../Assets/images/tv.png"
import img4 from "../../Assets/images/entriviados.png"
import img5 from "../../Assets/images/dn.png"
import img6 from "../../Assets/images/ta.png"
import img7 from "../../Assets/images/mdq.png"
import img8 from "../../Assets/images/ruca.png"
import img9 from "../../Assets/images/pitu.png"
import img10 from "../../Assets/images/forest.png"
import logo1 from "../../Assets/images/uniformes.webp"
import logo2 from "../../Assets/images/logoAmbos.png"
import logo3 from "../../Assets/images/lcintia.png"
import logo4 from "../../Assets/images/meeseks.png"
import logo5 from "../../Assets/images/disney.png"
import logo6 from "../../Assets/images/logotateti.png"
import logo7 from "../../Assets/images/surf.png"
import logo8 from "../../Assets/images/lruca.png"
import logo9 from "../../Assets/images/vaca.png"
import logo10 from "../../Assets/images/lforest.png"
import { useState } from "react"

const ProyectosN = () => {
  const proyectos = [
    { titulo: "MDQ Surf Shop", img: img7, logo: logo7 },
    { titulo: "Tienda Vintash", img: img3, logo: logo3 },
    { titulo: "Ruca Textil", img: img8, logo: logo8 },
    { titulo: "Akumal Uniformes", img: img1, logo: logo1 },
    { titulo: "Ambos Akumal", img: img2, logo: logo2 },
    { titulo: "Forest Gym", img: img10, logo: logo10 },
    { titulo: "Entriviados", img: img4, logo: logo4 },
    { titulo: "Pitupedia", img: img9, logo: logo9 },
    { titulo: "Disney Clon", img: img5, logo: logo5 },
    { titulo: "Ta te ti", img: img6, logo: logo6 },
  ]
  const [imagenes, setImagenes] = useState(proyectos[0].img)
  const [titulo, setTitulo] = useState(proyectos[0].titulo)

  const selectorImagen = (e) => {
    let seleccionado = proyectos.filter(
      (proyect) => proyect.titulo === e.target.id
    )
    setImagenes(seleccionado[0].img)
    setTitulo(seleccionado[0].titulo)
  }

  return (
    <div className="proyectosCont">
      <div className="proyectos">
        <ul>
          {proyectos.map((proyecto) => (
            <div className="contLogoProyecto">
              <img
                id={proyecto.titulo}
                onClick={selectorImagen}
                className="proyectosLogo"
                src={proyecto.logo}
                alt=""
              />
            </div>
          ))}
        </ul>
      </div>
      <div className="vista">
        <div className="contTitulo">
          <h3>{titulo}</h3>
        </div>

        <img src={imagenes} alt="" />
      </div>
    </div>
  )
}

export default ProyectosN
