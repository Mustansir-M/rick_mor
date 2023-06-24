import React, { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import CharacterFilters from '../components/CharacterFilters';
import api from '../services/api';
import "./HomePage.css";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    gender: ''
  });

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await api.get('/character');
      setCharacters(response.data.results);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    
    }));
  };

  const filteredCharacters = characters.filter(character => {
    const { name, status, gender } = filters;
    
    const isNameMatch = name === '' || character.name.toLowerCase().includes(name.toLowerCase());
  const isStatusMatch = status === '' ? true : character.status.toLowerCase() === status.toLowerCase();
  const isGenderMatch = gender === '' ? true : character.gender.toLowerCase() === gender.toLowerCase();
    
    return isNameMatch && isStatusMatch && isGenderMatch;
  });

  
  return (
    <div className='home-list'>
      <h1>Rick and Morty Characters</h1>
      <CharacterFilters filters={filters} onFilterChange={handleFilterChange} />
      <CharacterList characters={filteredCharacters} />
    
    </div>
  );
};

export default HomePage;
