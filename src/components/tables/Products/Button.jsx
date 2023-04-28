import React from 'react';

const Button = ({onClick}) => (
  <button className="sidebar-toggle-button" onClick={onClick}>
    Toggle Sidebar
  </button>
);

export default Button;
