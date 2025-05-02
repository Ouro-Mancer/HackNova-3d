// src/components/CanvasLoader.jsx
import React from 'react';
import { Html } from '@react-three/drei';

const CanvasLoader = () => {
  return (
    <Html center>
      <div className="absolute -translate-x-[50%] -translate-y-[50%] w-[50px] h-[50px] rounded-full bg-[#a9c23b] blur-sm opacity-80 animate-pulse z-0"></div>

    </Html>
  );
};

export default CanvasLoader;
