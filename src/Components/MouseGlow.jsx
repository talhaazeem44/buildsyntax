import React, { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x - 75,
        top: position.y - 75,
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,255,255,0.3), transparent)",
        pointerEvents: "none",
        zIndex: 10,
        mixBlendMode: "screen",
      }}
    />
  );
}
