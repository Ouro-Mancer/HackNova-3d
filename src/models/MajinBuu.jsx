import { useGLTF } from '@react-three/drei'
import React from 'react'

function MajinBuu() {

    const gltf = useGLTF('/models/fat_majin_buu.glb')

    return (
        <primitive object={gltf.scene} />
    )
}


export default MajinBuu