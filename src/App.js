import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import MockServicePage from './components/project_pages/MockServicePage';
import Album from './components/site_pages/Album';

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Album} />
      <Route path="/mockservice" component={MockServicePage} />
    </BrowserRouter>
  );
}