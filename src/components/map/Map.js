import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import React, { useRef, useEffect } from 'react';
import { MAP_BOX_TOKEN } from '../../constants/config';
import Card from '../card/Card';
import './Map.css';
 
mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = MAP_BOX_TOKEN;


function Map({data}) {

    const mapContainer = useRef();

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style:'mapbox://styles/mapbox/light-v10',
            center:[data[0].coordinates.longitude, data[0].coordinates.latitude],
            zoom: 3
        });
        data.forEach(location => {
            if(!location.coordinates.longitude || !location.coordinates.latitude) return;
            let el = document.createElement('div');
            el.className = 'marker';
            new mapboxgl.Marker(el)
                .setLngLat([location.coordinates.longitude, location.coordinates.latitude])
                .addTo(map);
        });
        return () => map.remove();
    });

    return (
        <section className="test">
            
            <div className="map-container" ref={mapContainer} />

            <div className="info-cards">

                {data.map((item, index) => {
                    return <Card key={index} value={item} />;
                })}
            </div>
        
        </section>
    )
}

export default Map;