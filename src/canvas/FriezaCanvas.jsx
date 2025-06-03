import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import Frieza from '../models/Frieza';

function FriezaCanvas() {
    return (
        <div className="w-full h-full" >
            <Canvas camera={{ position: [0, 1.5, 8], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 0, 5]} intensity={1} />
                <Suspense fallback={<CanvasLoader />}>
                    <Frieza position={[0, 0.3, 0]} scale={[4, 4, 4]} rotation={[-0.5, 0, 0]} />
                </Suspense>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
        </div >
    );
}

export default FriezaCanvas;