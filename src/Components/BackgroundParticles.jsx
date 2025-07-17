import React from 'react';
import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';

function BackgroundParticles() {
  const particlesInit = async (engine) => {
    // Load the preset instead of loadFull
    await loadLinksPreset(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 80 },
          color: { value: "#0ff" },
          links: {
            enable: true,
            color: "#0ff",
            distance: 150,
            opacity: 0.5,
            width: 1
          },
          move: { enable: true, speed: 1 },
          size: { value: { min: 1, max: 3 } },
          shape: { type: "circle" },
        }
      }}
    />
  );
}

export default BackgroundParticles;
