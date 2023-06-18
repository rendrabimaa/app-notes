/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import ThemeContext from '../../context/ThemeContext';

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button type="button" className="toggle-theme" onClick={toggleTheme}>
      {theme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </button>
  );
}

export default ThemeButton;