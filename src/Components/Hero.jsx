import React, { useEffect, useRef } from 'react';


function Hero() {
  // const video2Ref = useRef(null);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (video2Ref.current) {
  //       video2Ref.current.play();
  //     }
  //   }, 5000); // 5 seconds delay

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <section className="hero-multivideo">
      <div className="video-grid">
          {/* <video  autoPlay loop muted playsInline className="hero-video">
          <source src="/videos/landing.mov" type="video/mp4" />
        </video> */}
      {/* <video autoPlay loop muted playsInline className="hero-video">
          <source src="/videos/ladning2.mp4" type="video/mp4" />
        </video> */}
        <div className="hero-overlay">
        <h1 className="hero-heading">
          We <br /> Reimagine <br /> Tomorrow
        </h1>
        <p className="hero-subheading">
          Driving growth and molding the future through transformative change
        </p>
        <button className="hero-btn">GET IN TOUCH</button>
      </div>
  

 
      </div>
    </section>
  );
}

export default Hero;
