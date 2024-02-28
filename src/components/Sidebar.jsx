import React, { useState } from 'react';

export const Sidebar = ({ categories, setCategories, setSelectedCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sidebarClass = isMenuOpen ? 'sidebar open' : 'sidebar';
  const categoryClass = isMenuOpen ? 'category close' : 'category';

  return (
    <div className={sidebarClass}>
      <div className='hamburger-menu' onClick={toggleMenu}>
        ≡
      </div>
      {categories.map((category, index) => (
        <div
          className={categoryClass}
          key={index}
          onClick={() => handleCategorySelect(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};
