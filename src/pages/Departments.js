import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Engineering from './Departments/Engineering';
import Science from './Departments/Science';
import './Departments.css'; // Import CSS for styling

const Departments = () => {
  return (
    <div className="departments-container">
      <h1>Departments</h1>
      <nav className="nav-buttons">
        <NavLink to="engineering" className="department-button engineering-button">
          Engineering
        </NavLink>
        <NavLink to="science" className="department-button science-button">
          Science
        </NavLink>
      </nav>
      <Routes>
        <Route path="engineering" element={<Engineering />} />
        <Route path="science" element={<Science />} />
      </Routes>
    </div>
  );
};

export default Departments;
