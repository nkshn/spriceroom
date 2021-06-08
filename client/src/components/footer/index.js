import React from "react";

import './Footer.scss';

export default function Navbar() {
  return (
    <section className="footer-container">
      <div className="footer-top">
        <div className="footer-top_leftBlock">
          <h4>+380 99 198 19 88</h4>
        </div>
        <div className="footer-top_centerBlock">
          {/*
            // link: https://goo.gl/maps/oqDi8bWST2nqHkwz5
          */}
          <h4>м. Луцьк, просп. Президента Грушевского, 2</h4>
        </div>
        <div className="footer-top_rigthBlock">
          {/*
            // link: https://www.instagram.com/the_spiceroom.lutsk/
            // link: https://www.facebook.com/thespiceroom.lutsk
          */}
          <ul>
            <li><h4>instagram</h4></li>
            <li><h4>facebook</h4></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <img src="http://via.placeholder.com/300x75" />
      </div>
    </section>
  )
}