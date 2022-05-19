import React, { useEffect, useRef } from 'react';
import './style.scss';
import photo4 from '../../assets/aboutImg.png';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function About() {
  let title = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    ScrollTrigger.create({
      trigger: '.about',
      start: 'top 85%',
      onEnter: () => {
        tl.fromTo('.circle', { scale: 0 }, { scale: 1, duration: 1.5 })
          .fromTo('.title1_about', { y: 200 }, { y: 0, duration: 0.6 })
          .fromTo('.title2_about', { y: 200 }, { y: 0, duration: 0.6 })
          .fromTo('.spann', { x: -300 }, { x: 0, duration: 0.5 })
          .fromTo('.desc_about', { y: 600 }, { y: 0, duration: 0.9 })
          .fromTo(
            '.image_container',
            { scale: 0 },
            { scale: 1, duration: 1.5 },
            '-=30%'
          );
      },
    });
  });

  return (
    <div className="about">
      <div className="circle"></div>
      <div className="about_content">
        <div className="about_content-left">
          <h2 className="title_about">
            <p className="title1_about" ref={title}>
              The Modern art
            </p>
            <p className="title2_about" ref={title}>
              of simplicity
            </p>
          </h2>
          <p className="desc_about">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.{' '}
          </p>
        </div>
        <div className="about_content-right">
          <div className="image_container">
            <img src={photo4} alt="" />
          </div>
        </div>
        <div className="span">
          <p className="spann">05</p>
        </div>
      </div>
    </div>
  );
}

export default About;
