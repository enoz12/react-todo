import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../../DarkModeContext/DarkModeContext';

import { HiMoon,HiSun } from 'react-icons/hi';


export default function Header({ filters, filter, onFilterChange }) {
  const {darkMode ,toogleDarkMode}=useDarkMode();
  const handleDarkMode=()=>{
    toogleDarkMode();
  }
  return (
    <header className={styles.header}>
      <button onClick={handleDarkMode} className={styles.toogleDarkMode}>
        {!darkMode&&<HiMoon />}
         {darkMode && <HiSun/>}
      </button>
    
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
