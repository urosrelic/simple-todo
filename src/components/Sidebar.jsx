/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { CiMenuBurger } from 'react-icons/ci';
import { CustomIcon } from './CustomIcon';
import { GrClose } from 'react-icons/gr';

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
  const sidebarClass = !isSidebarMenuOpen ? 'sidebar closed' : 'sidebar opened';
  const categoryClass = !isSidebarMenuOpen
    ? 'category closed'
    : 'category opened';

  return (
    <div className={sidebarClass}>
      <div className='hamburger-menu' onClick={toggleMenu}>
        <CustomIcon icon={isSidebarMenuOpen ? <GrClose /> : <CiMenuBurger />} />
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
