import { NavLink } from "react-router-dom";

function SideBar(){

    return(
        <nav className="side-bar">
            <ul>
                <li>
                <NavLink to="/" 
                    className={({ isActive }) => isActive ? "selected" : ""} style={{ display: "block", padding: "1em" }}>
                    <img src="https://res.cloudinary.com/dwyipecoa/image/upload/v1737447320/home-round_n6cocq.svg" alt="home icon"/>
                    <span className="side-bar-text">Home</span>
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? "selected" : ""} style={{ display: "block", padding: "1em" }}>
                    <img src="https://res.cloudinary.com/dwyipecoa/image/upload/v1737447320/chat-round_ll9k73.svg" alt="about icon"/>
                    <span className="side-bar-text">About</span>
                </NavLink> 
                </li> 
              </ul>
            </nav>
          );
}

export default SideBar