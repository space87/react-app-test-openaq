import { useState } from 'react';
import './App.css';
import '../../css/reset.css';
import Notification from '../notification/Notification';
import Map from '../map/Map';
import {FILTER_OPTIONS} from '../../constants/config';

function App() {
  const [mapContent, setMapContent] = useState([]);

  function filterByCountry(e) {
    setMapContent([]);
    if(e.target.value.length === 0) return;

    fetch(`https://api.openaq.org/v2/locations?page=1&limit=50&metadata=true&country=${e.target.value}&order_by=city&sort=asc`)
      .then(response => response.json())
      .then(json => setMapContent(json.results));
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="title"> Api AQ test</h1>
        <section className="filters">
          <select onChange={filterByCountry}>
            {FILTER_OPTIONS.map((item, index) => {
              return <option key={index} value={item.value}>{item.label}</option>
            })}
          </select>
        </section>
      </header>
    
      <section className="results">
        {mapContent.length > 0 ? <Map data={mapContent} /> : <Notification text="Select a country to see locations of sensors" />}
      </section>
  
     
    </div>
  );
}

export default App;
