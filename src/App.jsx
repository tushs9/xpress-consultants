import React from 'react';
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <h1>Welcome to Xpress Consultants</h1>
      <nav>
        <Link to="/about">About Us</Link> | 
        <Link to="/contact">Contact</Link> | 
        <Link to="/destinations">Destinations</Link> | 
        <Link to="/vacancies">Vacancies</Link>
      </nav>
    </div>
  );
}
