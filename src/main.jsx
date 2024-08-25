import { StrictMode, useState, useEffect } from 'react'
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
import { messages } from './consts.js';
import { save } from './services/async-storage.service.js';
import About from './pages/about/About.jsx';

export const Main = () => {
  const [emails, setEmails] = useState(messages);
  const [searchInput,setSearchInput] = useState("");

  useEffect(() => {
    save("emails", messages);
  },[])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App setSearchInput={setSearchInput}/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/inbox",
          element: <Inbox emails={emails} setEmails={setEmails} searchInput={searchInput}/>,
        },
        {
          path: "/sent",
          element: <Sent emails={emails} setEmails={setEmails} searchInput={searchInput}/>,
        },
        {
          path: "/starred",
          element: <Starred emails={emails} setEmails={setEmails} searchInput={searchInput}/>,
        },
        {
          path: "/trash",
          element: <Trash emails={emails} setEmails={setEmails} searchInput={searchInput}/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
      ]
    },
  ]);

  return   <RouterProvider router={router} />
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Main/>
  </StrictMode>,
)
