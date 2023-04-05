import { NavLink } from "react-router-dom";
import './navbar.css'


export default function NavBar (){
    return(
        <div className="rst-app__navbar">
            <nav>
                <NavLink className='rst-app__navbar-link' to='/'>Home</NavLink>
                <NavLink className='rst-app__navbar-link' to='/about-us'>About Us</NavLink>
                <h1>BB</h1>
                <NavLink className='rst-app__navbar-link' to='/contact'>Contact</NavLink>
                <NavLink className='rst-app__navbar-link' to='/special-menu'>Menu</NavLink>
            </nav>
        </div>
    )
}