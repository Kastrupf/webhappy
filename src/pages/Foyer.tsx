import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useHistory } from 'react-router-dom';
import L from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/foyer.css';
import Sidebar from "../components/Sidebar";

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [50, 60],
  iconAnchor: [25, 60],
  popupAnchor: [0, -52]
})

export default function Foyer() {
  const { goBack } = useHistory();

  return (
    <div id="page-foyer">
      <Sidebar />

      <main>
        <div className="foyer-details">
          <img src="" alt="Foyer Montmejam" />

          <div className="images">
            <button className="active" type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Foyer Montmejam" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Foyer Montmejam" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Foyer Montmejam" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Foyer Montmejam" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Foyer Montmejam" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
          </div>
          
          <div className="foyer-details-content">
            <h1>Foyer Montmejam</h1>
            <p>Maison d'enfants à caractère social (MECS)</p>

            <div className="map-container">
              <Map 
                center={[44.8584692,-0.5716759]} 
                zoom={15} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                                   
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              
                <Marker interactive={false} icon={happyMapIcon} position={[44.8584692,-0.5716759]} />
              </Map>

              <footer>
                <a href="">Voir l'itineraire dans Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruction de visite</h2>
            <p>Venez comme vous vous sentez et apportez beaucoup d'amour à donner.</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Lundi au vendredi <br />
                8 à 18h
              </div>
              <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Nous sommes ouverts <br />
                les weekends
              </div>
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Prendre un rendez-vous
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}