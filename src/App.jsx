import { Children, useState } from 'react'
import './App.css'
import Layout from './components/Layout';
import About from './components/About';
import Home from './components/Home'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/NotFound';


export default function App() {


  const routes = createBrowserRouter([
    {
      path: '/', element: <Layout></Layout>, children: [
      {index:true, element: <Home></Home>},
      {path:'/about',element:<About></About>},
      {path:'/portfolio',element:<Portfolio></Portfolio>},
      {path:'/contact',element:<Contact></Contact>},
      {path: '*' ,element: <NotFound></NotFound>}
    ]}
  ])


  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

