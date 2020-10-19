import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useParams } from 'react-router-dom'

import '../styles/pages/foyer.css';
import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";
import { useState } from "react";
import { useEffect } from "react";
import api from "../services/api";

interface Foyer {
	latitude: number;
	longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface FoyerParams {
	id: string;
}

export default function Foyer() {
  // console.log(foyers);
  const params = useParams<FoyerParams>() ;
  const [foyer, setFoyer] = useState<Foyer>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
	useEffect(() => {
		api.get(`foyers/${params.id}`).then(response => {
			// console.log(response.data);
			setFoyer(response.data);
		});
  }, [params.id]);
  
  if (!foyer) {
    return <p>Loading...</p>;
  }

  return (
    <div id="page-foyer">
      <Sidebar />

      <main>
        <div className="foyer-details">
          <img src={foyer.images[activeImageIndex].url} alt={foyer.name} />

          <div className="images">
            {foyer.images.map((image, index) => {
              return (
                <button 
                  key= {image.id} 
                  className={activeImageIndex === index ? 'active' : ''} 
                  type="button"
                  onClick={() =>{
                    setActiveImageIndex(index);
                  }}
                >
                  <img src={image.url} alt={foyer.name} />
                </button>
              );
            })}
          </div>
          
          <div className="foyer-details-content">
            <h1>{foyer.name}</h1>
            <p>{foyer.about}</p>

            <div className="map-container">
              <Map 
                center={[foyer.latitude,foyer.longitude]} 
                zoom={15} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >                                   
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              
                <Marker interactive={false} icon={mapIcon} position={[foyer.latitude,foyer.longitude]} />
              </Map>

              <footer>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${foyer.latitude},${foyer.longitude}`}>Voir l'itineraire dans Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Conditions de visite</h2>
            <p>{foyer.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Du lundi au vendredi <br />
                {foyer.opening_hours}
              </div>
              { foyer.open_on_weekends ? (
                  <div className="open-on-weekends">
                    <FiInfo size={32} color="#39CC83" />
                    Nous sommes ouverts <br />
                    pendant les weekends
                </div>
              ) : (
                  <div className="open-on-weekends not-open">
                    <FiInfo size={32} color="#FF669D" />
                    Nous sommes fermés <br />
                    les weekends
                  </div>
              ) }
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