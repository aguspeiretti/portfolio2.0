import "./App.scss"
import { Routes, Route } from "react-router-dom"
import SideBar from "./Components/SideBar/SideBar"
import Layout from "./Components/Layout/Layout"
import About from "./Components/About/About"
import SkillsBar from "./Components/SkillsBar/SkillsBar"
import Proyects from "./Components/Proyects/Proyects"
import Contact from "./Components/Contact/Contact"
import MapView from "./Components/mapView/MapView"

function App() {
  return (
    <div className="App">
      <>
        <SideBar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="About" element={<About />} />
          <Route path="Proyects" element={<Proyects />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </>
    </div>
  )
}

export default App
