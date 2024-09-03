import { Outlet } from 'react-router-dom'
import './App.css'
import { MainNav } from './components/mainNav/MainNav';
import { TopBar } from './components/topBar/TopBar';

function App({setSearchInput, unreadCount, setUnreadCount, composeEmail}) {

  return (
    <div className='app'>
      <TopBar setSearchInput={setSearchInput} composeEmail={composeEmail}/>
      <div className='main-container'>
        <MainNav unreadCount={unreadCount} setUnreadCount={setUnreadCount}/>
        <Outlet/>
      </div>
    </div>
  )
}

export default App;
