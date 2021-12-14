import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Memories from './Memories';
import FamilyTree from './FamilyTree';
import About from './About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.render(
  ( <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/familytree" element={<FamilyTree />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode> ),
  document.getElementById('root')
);
