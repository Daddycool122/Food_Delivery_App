/* eslint-disable no-unused-vars */
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Body from './components/Body.jsx'
import './index.css'
import Contact from './components/Contact.jsx'
import Cart from './components/Cart.jsx'
import Error from './components/Error.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import   { lazy,Suspense } from 'react'
import React from 'react'

const Grocery = lazy(()=>import('./components/Grocery.jsx'));
const About = lazy(()=>import('./components/About.jsx'))
const appRouter = createBrowserRouter([
    {
      path: '/',
      element : <App/>,
      children:[
        {
            path: '/',
            element : <Body/>
            
          },
        {
            path: '/about',
            element : <Suspense fallback={<h2>Loading.......</h2>}><About/></Suspense>
            
          },
          {
            path: '/contact',
            element : <Contact/>
          },
          {
            path: '/cart',
            element : <Cart />
          },
          {
            path: '/restaurants/:resId',
            element: <RestaurantMenu/>
          },
          {
            path: '/grocery',
            element: <Suspense fallback={<h2>loading...........</h2>}><Grocery/></Suspense>
          }
      ],
      errorElement: <Error/>
    }
  ])

createRoot(document.getElementById('root')).render(
  
    <>
    <RouterProvider router={appRouter}/>
    
    </>
)
