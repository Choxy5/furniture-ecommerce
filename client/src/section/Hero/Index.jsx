import { useRef, useEffect } from 'react';
import './style.scss';
import { gsap } from 'gsap';
import homeImg from '../../assets/home.png';
import Navbar from '../../components/Navbar/Index';

function Hero() {
  const textRef = useRef();
  let container = useRef();
  let tl = gsap.timeline();

  useEffect(() => {
    tl.to('.image_container', { width: '100%', duration: 1.5 });

    tl.to('#create', { y: '0%', duration: 0.8, stagger: 0.3 });
  });

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="image_container" ref={container}>
          <img src={homeImg} alt="" />
        </div>
        <div className="main">
          <div className="heading">
            <h2>
              <span ref={textRef} id="create">
                make your
              </span>
            </h2>
            <h2>
              <span ref={textRef} id="create">
                dream house
              </span>
            </h2>
            <h2>
              <span ref={textRef} id="create">
                come alive
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
