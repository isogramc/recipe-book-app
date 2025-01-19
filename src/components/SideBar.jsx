import { NavLink } from "react-router-dom";

function SideBar(){
    return(
        <nav className="side-bar">
            <ul>
                <li>
                <NavLink to="/" 
                         className={({ isActive }) => isActive ? "selected" : ""} style={{display: "block", padding: "1em"}}>
                        <img className="side-bar-icon" src="/src/assets/home-round.svg" alt="home icon" />
                        <span className="side-bar-text">Home</span>
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? "selected" : ""} style={{display: "block", padding: "1em"}}>
                      <img className="side-bar-icon" src="/src/assets/chat-round.svg" alt="about icon" />
                    <span className="side-bar-text">About</span>
                </NavLink> 
                </li> 
              </ul>
            </nav>
          );
}

export default SideBar