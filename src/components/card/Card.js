import './Card.css';
import { getTimeSince } from '../../helpers/helpers.js'
function Card({ value }) {

    return (
      <div className="card">
        <header className="card__header">
          <p className="last-updated">Updated {getTimeSince(value.lastUpdated)} minutes ago</p>
          <p className="location">{value.name},
           in {value.city}, {value.country}</p>
        </header>

        <dl className="meta-details">
          <dt className="meta-details__title">
            PARAMETERS
          </dt>
          <dd>
            {value.parameters.map((parameter, index) => {
              return <span key={index}>{parameter.parameter},</span>
            })}
          </dd>
          <dt className="meta-details__title" >SOURCE</dt>
          <dd><a href={value.sources[0].url} target="_blank" rel="noreferrer">{value.sources[0].name}</a></dd>
        </dl>
      </div>
    );
  }
  
export default Card;
