import React from 'react';
import './style.scss';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <div className="top_section">
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <div className="title_links">
          <div className="links">
            <p>Information</p>
            <ul>
              <li>Events</li>
              <li>Terms of services</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div className="links">
            <p>Shop</p>
            <ul>
              <li>Chairs</li>
              <li>Sofa</li>
              <li>Lamps</li>
              <li>Tables</li>
            </ul>
          </div>

          <div className="links">
            <p>Contact</p>
            <ul>
              <li>New York</li>
              <li>9416 Wood Street</li>
              <li>555 - 888 - 222</li>
              <li>furniture@info.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="side_section">
        <a href="#" className="side_links">
          <FaFacebook />
        </a>
        <a href="#" className="side_links">
          <FaInstagram />
        </a>
        <a href="#" className="side_links">
          <FaTwitter />
        </a>
      </div>
      <div className="bottom_section">
        <p className="end"> 2021 Kristijan Blažević. All rights reserved.</p>
      </div>
    </div>
  );
}
