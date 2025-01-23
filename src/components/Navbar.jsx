import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';

import React from "react";

function Navbar() {
  const cloudName = 'dwyipecoa';
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });
  return (
    <nav className="navbar">
      <div className="layout1"></div>
      <img className="logo" src="https://res.cloudinary.com/dwyipecoa/image/upload/v1737447320/logo_xbvghd.png" alt="logo"/>
      <a href="/"><h1>My Recipe Book</h1></a>
      <img className="logo" src="https://res.cloudinary.com/dwyipecoa/image/upload/v1737447320/logo_xbvghd.png" alt="logo"/>
    </nav>
  );
}

export default Navbar;
