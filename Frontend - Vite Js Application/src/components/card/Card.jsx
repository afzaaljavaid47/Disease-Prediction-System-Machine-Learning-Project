import { useState } from 'react';
import './Card.scss'
import data from '../../data'

const Card = () => {
  const [detail, setDetail] = useState(data);
  return (
    <div className='card'>
      {
        detail.map(({ title, content, image }) => {
          return (
            <div className="container">
              <img src={image} alt="card image" />
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Card