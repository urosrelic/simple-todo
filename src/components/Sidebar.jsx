/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

export const Sidebar = ({
  categories,
  setSelectedCategory,
  isSidebarMenuOpen,
  setIsSidebarMenuOpen,
}) => {
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const toggleMenu = () => {
    setIsSidebarMenuOpen(!isSidebarMenuOpen);
  };

  useEffect(() => {
    console.log(isSidebarMenuOpen);
  }, [isSidebarMenuOpen]);

  // * Sidebar transitions
  const sidebarClass = !isSidebarMenuOpen ? 'sidebar open' : 'sidebar';
  const categoryClass = !isSidebarMenuOpen ? 'category close' : 'category';

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
