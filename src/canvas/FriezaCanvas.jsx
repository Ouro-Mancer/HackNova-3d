import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import Frieza from '../models/Frieza';


function FriezaCanvas() {
    return (
        <>
            <Canvas
                camera={{ position: [0, 1.5, 8], fov: 75 }}

                className="w-full h-full"
            >
                <ambientLight intensity={4} position={[1, 1, 8]} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <directionalLight position={[1, 1, 1]} intensity={3} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 1.5}   // Limit view range from top to bottom
                    minAzimuthAngle={-Math.PI}      // Full 360° rotation to the left
                    maxAzimuthAngle={Math.PI}       // Full 360° rotation to the right

                />

                <Suspense fallback={<CanvasLoader />}>

                    <Frieza position={[0, 0.3, 0]} scale={[4, 4, 4]} rotation={[-0.5, 0, 0]} />
                </Suspense>
            </Canvas>
        </>


    );
}

export default FriezaCanvas;