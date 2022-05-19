import React, { useEffect } from 'react';
import './style.scss';
import chair from '../../assets/chair.jpg';
import sink from '../../assets/sink.jpg';
import lamps from '../../assets/lamps.jpg';
import sofa from '../../assets/sofa.jpg';
import SpinningText from '../../components/SpinningText/Index';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Collection() {
  useEffect(() => {
    const tl = gsap.timeline();
    ScrollTrigger.create({
      trigger: '.collection',
      start: 'top 70%',
      onEnter: () => {
        tl.fromTo('.button', { scale: 0 }, { scale: 1, duration: 1, delay: 1 });
        tl.fromTo('.info', { y: 100 }, { y: 0, duration: 1 });
      },
    });
  }, []);

  return (
    <div className="collection">
      <div className="collection_content">
        <div className="collection_content-left">
          <div className="chair">
            <img src={chair} alt="" />
            <div className="info">
              <h6>Chair</h6>
              <p>€49.99</p>
            </div>
          </div>
          <div className="sink">
            <img src={sink} alt="" />
            <div className="info">
              <h6>Sink</h6>
              <p>€39.99</p>
            </div>
          </div>
        </div>

        <div className="button">
          <SpinningText text="see collection " />
        </div>

        <div className="collection_content-right">
          <div className="lamps">
            <img src={lamps} alt="" />
            <div className="info">
              <h6>Lamps</h6>
              <p>€69.99</p>
            </div>
          </div>
          <div className="sofa">
            <img src={sofa} alt="" />
            <div className="info">
              <h6>Sofa</h6>
              <p>€899.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
