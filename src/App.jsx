import { Outlet } from 'react-router-dom'
import './App.css'
import { MainNav } from './components/mainNav/MainNav';
import { TopBar } from './components/topBar/TopBar';

function App() {

  return (
    <div className='app'>
      <TopBar/>
      <div className='main-container'>
        <MainNav/>
        <Outlet/>
      </div>
    </div>
  )
}

export default App;
