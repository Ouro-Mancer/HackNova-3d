import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import KidGoku from '../models/KidGoku'
import MajinBuu from '../models/MajinBuu'

const KidGokuCanvas = () => {
    return (
        <div className="w-full h-full relative left-0 top-0 z-50" >
            <Canvas camera={{ position: [0, 1.5, 8], fov: 15 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 0, 5]} intensity={1} />
                <Suspense fallback={<CanvasLoader />}>
                    <KidGoku />
                </Suspense>
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div >
    )
}

export default KidGokuCanvas