import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/foyers-map.css';

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

			<div></div>

			<Link to="" className="create-foyer">
				<FiPlus size={32} color="#FFF" />
			</Link>

		</div>
    
  )
}

export default FoyersMap;