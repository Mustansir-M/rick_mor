import React from 'react';
import "./CharacterFilters.css"

const CharacterFilters = ({ filters, onFilterChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="character-filters">
      <input
        type="text"
        name="name"
        placeholder="Enter name..."
        value={filters.name}
        onChange={handleFilterChange}
      />
      <select
        name="status"
        value={filters.status}
        onChange={handleFilterChange}
      >
        <option value="">Select the status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        name="gender"
        value={filters.gender}
        onChange={handleFilterChange}
      >
        <option value="">Select the gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default CharacterFilters;
