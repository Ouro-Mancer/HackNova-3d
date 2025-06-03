import { useGLTF } from '@react-three/drei'
import React from 'react'

function KidGoku({ rotation, scale, position }) {

    const gltf = useGLTF('/models/son_goku_and_kintoun_nimbus.glb')

    return (
        <primitive
            object={gltf.scene}
            rotation={rotation}
            scale={scale}
            position={position}
        />

    )
}
useGLTF.preload('/models/son_goku_and_kintoun_nimbus.glb');

export default KidGoku