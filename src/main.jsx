import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Home } from "./pages/home/Home.jsx";
import { Inbox } from "./pages/inbox/Inbox.jsx";
import { Sent } from "./pages/sent/Sent.jsx";
import { Starred } from "./pages/starred/Starred.jsx";
import { Trash } from "./pages/trash/Trash.jsx";
import { messages } from "./consts.js";
import { save, storageService } from "./services/async-storage.service.js";
import About from "./pages/about/About.jsx";
import EmailPreview from "./pages/emailPreview/emailPreview.jsx";

export const Main = () => {
  const [emails, setEmails] = useState(messages);
  const [searchInput, setSearchInput] = useState("");
  const [unreadCount, setUnreadCount] = useState(0);
  // console.log(emails)

  useEffect(() => {
    save("emails", messages);
  }, []);

  const handleToggleIsRead = async(id) => {
    const entities = await storageService.query("emails");
    const updatedList = emails.map((email) =>
      id === email.id ? { ...email, isRead: !email.isRead } : { ...email }
    );
    setEmails(updatedList);

    const updatedFullList = entities.map((email) =>
      id === email.id ? { ...email, isRead: !email.isRead } : { ...email }
    );
    const unReadCount = updatedFullList.filter((item) => !item.isRead).length;
    setUnreadCount(unReadCount);
    save("emails", updatedFullList);
  };

  const handleToggleIsStarred =  async(id) => {
    const entities = await storageService.query("emails");

    const updatedFullList = entities.map((email) =>
      id === email.id ? { ...email, isStarred: !email.isStarred } : { ...email }
    );

    save("emails", updatedFullList);//delete if have any list bugs
    setEmails(updatedFullList);
  };

  const router = createBrowserRouter([
    {
      path: "/react-project-mail/",
      element: <App setSearchInput={setSearchInput} unreadCount={unreadCount} setUnreadCount={setUnreadCount} />,
      children: [
        {
          path: "/react-project-mail/",
          element: <Home />,
        },
        {
          path: "/react-project-mail/inbox",
          element: (
            <Inbox
              emails={emails}
              setEmails={setEmails}
              searchInput={searchInput}
              handleToggleIsRead={handleToggleIsRead}
              handleToggleIsStarred={handleToggleIsStarred}
              setUnreadCount={setUnreadCount}
            />
          ),
        },
        {
          path: "/react-project-mail/sent",
          element: (
            <Sent
              emails={emails}
              setEmails={setEmails}
              searchInput={searchInput}
              handleToggleIsStarred={handleToggleIsStarred}
            />
          ),
        },
        {
          path: "/react-project-mail/starred",
          element: (
            <Starred
              emails={emails}
              setEmails={setEmails}
              searchInput={searchInput}
              handleToggleIsStarred={handleToggleIsStarred}
            />
          ),
        },
        {
          path: "/react-project-mail/trash",
          element: (
            <Trash
              emails={emails}
              setEmails={setEmails}
              searchInput={searchInput}
            />
          ),
        },
        {
          path: "/react-project-mail/preview/:id",
          element: <EmailPreview />,
        },
        {
          path: "/react-project-mail/about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
