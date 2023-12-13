import React from 'react';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import BasicTable from './components/BasicTable';
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';
import PaginationTable from './components/PaginationTable';
import RowSelection from './components/RowSelection';
import ColumnOrder from './components/ColumnOrder';
import ColumnHiding from './components/ColumnHiding';
import StickyTable from './components/StickyTable';
import './App.css'
import Navbar from './components/Navbar';

function App() {
  return (

    <BrowserRouter>
    <Navbar />
   
 
            
       
        <Routes>
        <Route path="/basic" element={<BasicTable/>} />
        <Route path="/sorting" element={<SortingTable/>} />
        <Route path="/filtering" element={<FilteringTable/>} />
        <Route path="/pagination" element={<PaginationTable/>} />
        <Route path="/row-selection" element={<RowSelection/>} />
        <Route path="/column-order" element={<ColumnOrder/>} />
        <Route path="/column-hiding" element={<ColumnHiding/>} />
        <Route path="/sticky" element={<StickyTable/>} />
        </Routes>
     
   
    </BrowserRouter>
  );
}

export default App;

