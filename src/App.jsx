import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { NavBar, Home, AboutUs, Contact, SpecialMenu } from './pages'

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div className='navbar'><NavBar/></div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/special-menu' element={<SpecialMenu/>}></Route>
      </Routes>
    </div>
  )
}

export default App
