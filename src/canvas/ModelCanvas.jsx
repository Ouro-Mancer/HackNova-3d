import React, { Suspense } from 'react'
import Models from '../models/Models'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'

function ModelCanvas({ modelPath, autorotate, autorotateSpeed, intensity = 0.5, ...props }) {
    return (
        <div className="w-full h-full" >
            <Canvas camera={{ position: [0, 1.5, 8], fov: 45 }}>
                <ambientLight intensity={intensity} />
                <directionalLight position={[0, 0, 5]} intensity={1} />

                <Suspense fallback={<CanvasLoader />}>
                    <Models modelPath={modelPath} {...props} />
                </Suspense>
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 1.5}   // Limit view range from top to bottom
                    autoRotate={autorotate}
                    autoRotateSpeed={autorotateSpeed}
                />
            </Canvas>
        </div >
    )
}

export default ModelCanvas