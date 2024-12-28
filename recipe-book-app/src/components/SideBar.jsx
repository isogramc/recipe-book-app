import { Link, NavLink } from "react-router-dom"; 

function SideBar(){
    return(
        <nav className="side-bar">
            <ul>
                <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
                    Home
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? "selected" : ""}>
                    About
                </NavLink>  
              </ul>
            </nav>
          );
}

export default SideBar