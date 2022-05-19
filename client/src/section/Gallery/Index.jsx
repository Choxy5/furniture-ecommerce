import React, { useEffect } from 'react';
import './style.scss';
import photo1 from '../../assets/gallery/photo1.png';
import photo2 from '../../assets/gallery/photo2.jpg';
import photo3 from '../../assets/gallery/photo3.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Gallery() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: '.gallery',
      start: 'top 90%',
      onEnter: () => {
        gsap.fromTo(
          '.gallery',
          { width: 0 },
          {
            width: '60%',
            duration: 1,
          }
        );
        gsap.fromTo('.desc_gallery', { x: -500 }, { x: 0, duration: 3, delay: 1.5 });
        gsap.fromTo('.photo2', { y: 500 }, { y: 0, duration: 3, delay: 1.5 });
        gsap.fromTo(
          '.title_gallery',
          { opacity: 0 },
          { opacity: 1, duration: 3, delay: 2.7 }
        );
        gsap.fromTo('.photo3', { y: 500 }, { y: 0, duration: 3, delay: 1.5 });
        gsap.fromTo(
          '.photo1',
          { opacity: 0 },
          { opacity: 1, duration: 2, delay: 1.5 }
        );
      },
    });
  }, []);

  return (
    <div className="gallery">
      <div className="gallery_content">
        <div className="gallery_content-left">
          <p className="desc_gallery">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <div className="title_gallery">collection /02</div>
          <img src={photo2} alt="" className="photo2" />
        </div>
        <div className="gallery_content-right">
          <h6 className="title_gallery">collection /01</h6>
          <img src={photo1} alt="" className="photo1" />

          <h6 className="title_gallery">collection /03</h6>
          <img src={photo3} alt="" className="photo3" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
