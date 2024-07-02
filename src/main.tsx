import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Partners } from './pages/Partners/Partners.tsx';
import { About } from './pages/About/About.tsx';
import { Shop } from './pages/Shop/Shop.tsx';
import { Loading } from './pages/Loading/Loading.tsx';
import { PaymentAndDelivery } from './pages/PaymentsAndDelivery/PaymentsAndDelivery.tsx';
import { Dashborad } from './pages/Dashboard/Dashborad.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/shop",
    element: <Shop/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/partners",
    element: <Partners/>,
  },
  {
    path: "/aboutDelivery",
    element: <PaymentAndDelivery/>,
  },
  {
    path: "/dashboard",
    element: <Dashborad/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
