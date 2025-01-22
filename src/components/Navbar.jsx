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
      <AdvancedImage style={{ width: "80px", margin: '10px' }} cldImg={cld.image('logo_xbvghd.png')}plugins={[responsive(), placeholder()]}/>
      <a href="/"><h1>My Recipe Book</h1></a>
      <AdvancedImage style={{ width: "80px", margin: '10px' }} cldImg={cld.image('logo_xbvghd.png')}plugins={[responsive(), placeholder()]}/>
    </nav>
  );
}

export default Navbar;
