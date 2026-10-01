import React from 'react';

const SearchPopup = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={`search-popup ${isOpen ? 'active' : ''}`}>
      <button 
        type="button" 
        className="close-search style-two border-0 bg-transparent" 
        onClick={onClose}
        aria-label="Close search"
      >
        <span className="fal fa-times"></span>
      </button>
      <button 
        type="button" 
        className="close-search border-0 bg-transparent" 
        onClick={onClose}
        aria-label="Close search"
      >
        <span className="fal fa-long-arrow-up"></span>
      </button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="search" name="search-field" placeholder="Search Here" required />
          <button type="submit" aria-label="Submit search"><i className="fal fa-search"></i></button>
        </div>
      </form>
    </div>
  );
};

export default SearchPopup;
