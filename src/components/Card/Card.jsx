import './Card.css';
import { Link } from 'react-router-dom';

function Card({ imgSrc, title, description, id }) {
  return (
    <div className='col-4'>
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body textcol">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={`/product/${id}`} className="btn btn-primary">Comprar</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;