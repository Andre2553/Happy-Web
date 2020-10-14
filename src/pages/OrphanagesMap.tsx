import React from 'react'
import { Link } from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import mapMarkerImg from '../images/map-marker.svg'
import {Map,TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css'
function OrphanageMap(){
    return(
        <div id="page-map">
        <aside>
          <header>
            <img src={mapMarkerImg} alt="happy"/>
            <h2>Choose one ophernage in the map</h2>
            <p>Many kids are waiting for you :)</p>
          </header>
          <footer>
            <strong>Sydney</strong>
            <span>NSW</span>
          </footer>
        </aside>
        <Map
        center={[-33.9032528,151.1763116]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
         */}
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        />
      
      </Map>
        <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF"/>
        </Link>
        </div>
    )
}
export default OrphanageMap