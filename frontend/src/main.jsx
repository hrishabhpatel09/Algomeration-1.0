import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromChildren, RouterProvider} from "react-router-dom"
import EyeTestPage from './pages/EyeTestPage.jsx'
import HomePage from './pages/HomePage.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path:'',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <HomePage/>  
      },
      {
        path:'/test',
        element: <EyeTestPage/>
      }
    ]
  }, 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
   <RouterProvider router={router}>
      <App/>
   </RouterProvider>
    </Provider>
  </StrictMode>,
)
