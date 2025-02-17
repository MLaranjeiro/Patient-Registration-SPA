import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import View1 from './views/View1';
import View2 from './views/View2';
import View3 from './views/View3';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<View1 />} />
        <Route path="/view2" element={<View2 />} />
        <Route path="/view3" element={<View3 />} />
      </Routes>
    </Router>
  );
}