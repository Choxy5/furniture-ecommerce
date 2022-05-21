import React, { useEffect } from 'react';
import './style.scss';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useEffect(() => {
    const tl = gsap.timeline();

    ScrollTrigger.create({
      trigger: '.contact',
      start: 'top 90%',
      onEnter: () => {
        tl.fromTo('.title_heading', { y: 300 }, { y: 0, duration: 1 });
      },
    });
  }, []);

  return (
    <div className="contact">
      <div className="title_contact">
        <h2 className="title_heading">let's start something big together</h2>
      </div>
      <input type="text" placeholder="Email" />
    </div>
  );
}

export default Contact;
