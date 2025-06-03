import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

function Models({ modelPath, scale = [1, 1, 1], position = [0, -1, 0], rotation = [0, Math.PI, 0] }) {

    const modelRef = useRef();

    const gltf = useGLTF(modelPath);
    useGLTF.preload(modelPath);

    return (
        <primitive
            ref={modelRef}
            object={gltf.scene}
            scale={scale}
            position={position}
            rotation={rotation}
        />
    )
}

export default Models