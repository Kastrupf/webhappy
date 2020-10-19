import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/foyers-map.css';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Foyer {
	id: number;
	latitude: number;
	longitude: number;
	name: string;
}

function FoyersMap() {
	// console.log(foyers);
	const [foyers, setFoyers] = useState<Foyer[]>([]);
	

	useEffect(() => {
		api.get('foyers').then(response => {
			// console.log(response.data);
			setFoyers(response.data);
		});
	}, []);

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

				{foyers.map(foyer => {
					return (
						<Marker 
							key={foyer.id}
							icon={mapIcon}
							position={[foyer.latitude,foyer.longitude]}
						>
						<Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
							{foyer.name}
							<Link to={`/foyers/${foyer.id}`}>
								<FiArrowRight size={20} color="FFF" />
							</Link>
						</Popup>
					</Marker>
					)
				})}
			</Map> 

			<Link to="/foyers/create" className="create-foyer">
				<FiPlus size={32} color="#FFF" />
			</Link>
		</div>
    )
}

export default FoyersMap;