import React from "react";

import './HomePage.scss';

function HomePage() {
  return (
    <div className="sub-container">
      <div className="homepage_block">
        <div>
          <div className="homepage_block-left">
            <img src="http://via.placeholder.com/450x350" title="start page" />
          </div>
          <div className="homepage_block-rigth">
            <h2>The Spiceroom - ми круті челікі</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu libero quam. Etiam id ultricies turpis, eu lobortis quam. Aliquam tincidunt ipsum efficitur tincidunt sodales. Vestibulum bibendum magna nec lectus vestibulum, vel lobortis sapien faucibus. Phasellus blandit a tortor at venenatis. Quisque eget maximus justo. Curabitur eget quam varius, pharetra leo non, accumsan lacus. Morbi sit amet faucibus erat. Donec a condimentum dolor. Pellentesque augue nisi, sollicitudin ut ex volutpat, tempor ultricies magna.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
