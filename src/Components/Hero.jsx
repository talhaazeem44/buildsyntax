import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./Hero.css"; // Optional custom styling
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const videos = [
    "/videos/khopri.mp4",
    "/videos/aivideo.mp4",

  ];
  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };
  return (
    <><section className="hero-section">
      <Carousel
        autoPlay
        interval={7000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        swipeable={true}
        emulateTouch={true}
        stopOnHover={false}
        dynamicHeight={false}
      >
        {videos.map((videoSrc, index) => (
          <div key={index} className="video-slide">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="hero-video"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        ))}
      </Carousel>

      {/* Overlay content stays fixed */}
      <div className="hero-overlay">
        <h1 className="hero-heading">
          Build What Tomorrow <br /> Demands
        </h1>
        <p className="hero-subheading">
          We develop intelligent, scalable solutions that future-proof your business from the inside out.
        </p>
        <button className="hero-btn"onClick={() => handleNavClick('/contact')}>GET IN TOUCH</button>
      </div>
    </section></>
  );
};

export default Hero;
