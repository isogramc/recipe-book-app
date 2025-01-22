import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';
import { NavLink } from "react-router-dom";

function SideBar(){
  const cloudName = 'dwyipecoa';
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });
    return(
        <nav className="side-bar">
            <ul>
                <li>
                <NavLink to="/" 
                         className={({ isActive }) => isActive ? "selected" : ""} style={{display: "block", padding: "1em"}}>
                        <AdvancedImage className="side-bar-icon" style={{ width: "45px", margin: '10px' }} cldImg={cld.image('home-round_n6cocq.svg')}plugins={[responsive(), placeholder()]}/>
                        <span className="side-bar-text">Home</span>
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? "selected" : ""} style={{display: "block", padding: "1em"}}>
                      <AdvancedImage className="side-bar-icon" style={{ width: "45px", margin: '10px' }} cldImg={cld.image('chat-round_ll9k73.svg')}plugins={[responsive(), placeholder()]}/>
                    <span className="side-bar-text">About</span>
                </NavLink> 
                </li> 
              </ul>
            </nav>
          );
}

export default SideBar