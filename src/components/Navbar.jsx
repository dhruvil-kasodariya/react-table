import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
       <Link to="/basic" className="navbar-item">Basic Table</Link>
          
          <Link to="/sorting" className="navbar-item">Sorting Table</Link>
      
          <Link to="/filtering" className="navbar-item">Filtering Table</Link>
      
          <Link to="/pagination" className="navbar-item">Pagination Table</Link>
       
          <Link to="/row-selection" className="navbar-item">Row Selection Table</Link>
      
          <Link to="/column-order" className="navbar-item">Column Order Table</Link>
      
          <Link to="/column-hiding" className="navbar-item">Column Hiding Table</Link>
      
          <Link to="/sticky" className="navbar-item">Sticky Table</Link>
     
    </div>
  );
}

export default Navbar;
