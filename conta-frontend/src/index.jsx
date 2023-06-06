import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContent from './components/MainContent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/", 
        element: <MainContent />
      },
      {
        path: "/:userId",
        element: <MainContent />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root')
  );
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
