import React from "react"
import "./SideBar.scss"
import cv from "../../Assets/CV.pdf"
import { Link } from "react-router-dom"
import { useState } from "react"

function SideBar() {
  const [icon, setIcon] = useState(true)

  return (
    <>
      <div className="navBar">
        <div className="pdf">
          <a href={cv} download>
            <i class="fa-regular fa-file"></i>
          </a>
          <span>
            cv
            <br /> download
          </span>
        </div>
        <div className="Links">
          <Link to={"/"}>
            <div>
              <i class="fa-solid fa-house"></i>
              <span>Home</span>
            </div>
          </Link>
          <Link to={"/About"}>
            <div>
              <i class="fa-solid fa-user"></i>
              <span>About</span>
            </div>
          </Link>
          <Link to={"/Proyects"}>
            {" "}
            <div>
              <i class="fa-solid fa-briefcase"></i>
              <span>proyects</span>
            </div>
          </Link>
          <Link to={"/Contact"}>
            <div>
              <i class="fa-regular fa-envelope"></i>
              <span>Contact</span>
            </div>
          </Link>
        </div>

        <div className="redes">
          <a href="https://www.facebook.com/agu.peiretti" target="_blank">
            <i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
            <span>Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/agupeiretti/?hl=es"
            target="_blank"
          >
            <i class="fa-brands fa-instagram"></i>
            <span>instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/agus-peiretti/" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i>
            <span>Linkedin</span>
          </a>
          <a href="https://github.com/aguspeiretti" target="_blank">
            <i class="fa-brands fa-github"></i>
            <span>Github</span>
          </a>
        </div>
      </div>
      <div className="navBar-responsive">
        <div className="Links-responsive">
          <Link to={"/"}>
            <div>
              <i class="fa-solid fa-house"></i>
              <span>Home</span>
            </div>
          </Link>
          <Link to={"/About"}>
            <div>
              <i class="fa-solid fa-user"></i>
              <span>About</span>
            </div>
          </Link>
          <Link to={"/Proyects"}>
            {" "}
            <div>
              <i class="fa-solid fa-briefcase"></i>
              <span>proyects</span>
            </div>
          </Link>
          <Link to={"/Contact"}>
            <div>
              <i class="fa-regular fa-envelope"></i>
              <span>Contact</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SideBar
