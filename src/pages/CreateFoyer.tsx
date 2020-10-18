import React from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useHistory } from "react-router-dom";

import { FiPlus } from "react-icons/fi";

import '../styles/pages/create-foyer.css';
import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";


export default function CreateFoyer() {
  const { goBack } = useHistory();

  return (
    <div id="page-create-foyer">
      <Sidebar />
     
      <main>
        <form className="create-foyer-form">
          <fieldset>
            <legend>Données</legend>

            <Map 
              center={[44.8584692,-0.5716759]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              
              <Marker interactive={false} icon={mapIcon} position={[44.8584692,-0.5716759]} />
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nom</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">A propos <span>Maximum de 300 caractères</span></label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Photos</label>

              <div className="uploaded-image">

              </div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitation</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instructions</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nom</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Ouvert les weekends</label>

              <div className="button-select">
                <button type="button" className="active">Oui</button>
                <button type="button">Non</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmer
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
