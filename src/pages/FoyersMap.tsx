import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/foyers-map.css';
import mapIcon from '../utils/mapIcon';

function FoyersMap() {
  return (
		<div id="page-map">
			<aside>
				<header>
					<img src={mapMarkerImg} alt="Happy" />

					<h2>Choisissez un foyer dans le map</h2>
					<p>De nombreux enfants attendent votre visite :)</p>
				</header>

				<footer>
					<strong>Bordeaux</strong>
					<span>Gironde</span>
				</footer>

			</aside>

			<Map
				center={[44.8584692,-0.5716759]}
				zoom={15}
				style={{ width: '100%', height: '100%'}}
			>	
				<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

				<Marker 
					icon={mapIcon}
					position={[44.8584692,-0.5716759]}
				>
					<Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
						Foyer Montemajam
						<Link to="/foyers/1">
							<FiArrowRight size={20} color="FFF" />
						</Link>
					</Popup>
				</Marker>


			</Map> 

			<Link to="/foyers/create" className="create-foyer">
				<FiPlus size={32} color="#FFF" />
			</Link>

		</div>
    
  )
}

export default FoyersMap;