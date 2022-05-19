import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './style.scss';

function Navbar() {
  const nav = useRef();
  const tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo('.navbar', { y: '-50' }, { y: '0' });
  }, []);

  return (
    <div className="navbar" ref={nav}>
      <div className="logo">Logo</div>
      <div className="items">cart (0)</div>
    </div>
  );
}

export default Navbar;
