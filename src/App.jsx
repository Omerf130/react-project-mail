import { Outlet } from 'react-router-dom'
import './App.css'
import { MainNav } from './components/mainNav/MainNav';
import { TopBar } from './components/topBar/TopBar';

function App({setSearchInput}) {

  return (
    <div className='app'>
      <TopBar setSearchInput={setSearchInput}/>
      <div className='main-container'>
        <MainNav/>
        <Outlet/>
      </div>
    </div>
  )
}

export default App;
