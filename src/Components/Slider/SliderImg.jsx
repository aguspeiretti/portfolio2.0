import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "./SliderImg.css"
import img1 from "../../Assets/images/ak1.png"
import img2 from "../../Assets/images/aku.png"
import img3 from "../../Assets/images/tv.png"
import img4 from "../../Assets/images/bg.png"
import img5 from "../../Assets/images/dn.png"
import img6 from "../../Assets/images/ta.png"
import img7 from "../../Assets/images/todo.png"
import img8 from "../../Assets/images/calc.png"

function SliderImg() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        <div>
          <h3>Akumal Uniformes</h3>
          <img src={img1} alt="" />
        </div>
        <div>
          <h3>Ambos Akumal</h3>
          <img src={img2} alt="" />
        </div>
        <div>
          <h3>Tienda Vintash</h3>
          <img src={img3} alt="" />
        </div>
        <div>
          <h3>Budget s.a</h3>
          <img src={img4} alt="" />
        </div>
        <div>
          <h3>Disney+ Clone</h3>
          <img src={img5} alt="" />
        </div>
        <div>
          <h3>Tic tac toe</h3>
          <img src={img6} alt="" />
        </div>
        <div>
          <h3>To do list</h3>
          <img src={img7} alt="" />
        </div>
        <div>
          <h3>Calculator</h3>
          <img src={img8} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default SliderImg
