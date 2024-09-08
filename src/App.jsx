import { Outlet } from 'react-router-dom'
import './App.css'
import { MainNav } from './components/mainNav/MainNav';
import { TopBar } from './components/topBar/TopBar';
import NoteComponent from './components/noteComponent/NoteComponent';

function App({setSearchInput, unreadCount, setUnreadCount, composeEmail, notification}) {

  return (
    <div className='app'>
      <TopBar setSearchInput={setSearchInput} composeEmail={composeEmail}/>
      <NoteComponent notification={notification}/>
      <div className='main-container'>
        <MainNav unreadCount={unreadCount} setUnreadCount={setUnreadCount}/>
        <Outlet/>
      </div>
    </div>
  )
}

export default App;
