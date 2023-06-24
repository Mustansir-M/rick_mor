import React from 'react';
import "./CharacterDetail.css"

const CharacterDetail = ({ character }) => {
  const { name, image, species, status, gender, origin, location,episode} = character;

  return (
    <div className="character-detail">

      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div className="character-info">

      <p><strong>Species:</strong> {species}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Origin:</strong> {origin.name}</p>
      <p><strong>Location:</strong> {location.name}</p>
      <p><strong>No. of Episodes:</strong> {episode.length}</p>
      </div>
    </div>
  );
};

export default CharacterDetail;
