import React from 'react';
import { Link } from 'react-router-dom';
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  const { id, name, image, gender, status } = character;

  return (
      <div className="overlay2">

          <div className='show-list'>
              <div className='show-item' key={id}>
                      <h2>{name}</h2>
                      <img src={image} alt={name} />
                      <hr className='line'/>
                      <p>Status: {status}</p>
                      <p>Gender: {gender}</p>
                  <Link className="btn" to={`/character/${id}`}>Know more</Link>
                      
                </div>
          </div>

      </div>
  );
};

export default CharacterCard;




