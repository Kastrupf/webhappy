import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/foyers-map.css';
import { url } from 'inspector';

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
			</Map> 

			<Link to="" className="create-foyer">
				<FiPlus size={32} color="#FFF" />
			</Link>

		</div>
    
  )
}

export default FoyersMap;