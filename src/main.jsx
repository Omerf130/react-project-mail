import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import { Home } from './pages/home/Home.jsx';
import { Inbox } from './pages/inbox/Inbox.jsx';
import { Sent } from './pages/sent/Sent.jsx';
import { Starred } from './pages/starred/Starred.jsx';
import { Trash } from './pages/trash/Trash.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/inbox",
        element: <Inbox/>,
      },
      {
        path: "/sent",
        element: <Sent/>,
      },
      {
        path: "/starred",
        element: <Starred/>,
      },
      {
        path: "/trash",
        element: <Trash/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
