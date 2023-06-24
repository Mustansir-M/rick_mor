import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail';
import api from '../services/api';

const CharacterDetailPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
      const fetchCharacter = async () => {
        try {
          const response = await api.get(`/character/${id}`);
          setCharacter(response.data);
        } catch (error) {
          console.error('Error fetching character:', error);
        }
    };
    fetchCharacter();
  }, [id]);



  return (
    <div>
      {character ? (
        <CharacterDetail character={character} />
      ) : (
        <p>Loading character...</p>
      )}
    </div>
  );
}


export default CharacterDetailPage;
