import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Navigate, redirect, Route, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import TextEditor from './components/TextEditor.jsx'
import {v1 as uuidV4} from 'uuid'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home />} exact>
      
      <Route path='/doc/:id' element={<TextEditor/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
