import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import RouteNavigation from './components/RouteNavigation/RouteNavigation';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteNavigation />
    </BrowserRouter>
  </React.StrictMode>,
)
