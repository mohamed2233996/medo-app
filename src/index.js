import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {HelmetProvider } from 'react-helmet-async';

import * as serviceWorkerRegistration from'./serviceWorkerRegistration';

import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Skills from './pages/Skills';
import Timeline from './pages/Timeline';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h2>
      opps....
    </h2>
  },

  {
    path: "/Home",
    element: <Home />,
    errorElement: <h2>
      opps....
    </h2>
  },

  {
    path: "/About",
    element: <About />,
    errorElement: <h2>
      opps....
    </h2>
  },

  {
    path: "/Gallery",
    element: <Gallery />,
    errorElement: <h2>
      opps....
    </h2>
  },

  {
    path: "/Skills",
    element: <Skills />,
    errorElement: <h2>
      opps....
    </h2>
  },

  {
    path: "/Timeline",
    element: <Timeline />,
    errorElement: <h2>
      opps....
    </h2>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </HelmetProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();