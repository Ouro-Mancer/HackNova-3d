// src/components/CanvasLoader.jsx
import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Loading... {Math.floor(progress)}%
      </div>
    </Html>
  );
};

export default CanvasLoader;
