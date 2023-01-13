import React from 'react'
import "./MapView.scss"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, useMap,Marker ,Popup } from 'react-leaflet'

function MapView() {
    const position = [-31.44779085202594, -64.18321456044701]
  return (
    <div id="map"> 
    <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Hi! evreyone!! <br /> Come over for a cup of coffe!
      </Popup>
    </Marker>
   
  </MapContainer>
  </div>
  
  )
}

export default MapView