import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { shaderMaterial, OrbitControls, Html, Grid, Center } from '@react-three/drei'
import portalVertexShader from '../shaders/portal/vertex.glsl'
import portalFragmentShader from '../shaders/portal/fragment.glsl'
import DefaultGrid from '../components/DefaultGrid.jsx'

// Use `vite-plugin-glsl` to import glsl files,
// https://github.com/UstymUkhman/vite-plugin-glsl#usage

const PortalMaterial = shaderMaterial(
    {
        uTime: 0,
        uColorStart: new THREE.Color('#ffffff'),
        uColorEnd: new THREE.Color('#9d4b4b')
    },
    portalVertexShader,
    portalFragmentShader
)

extend({ PortalMaterial })

export default function Sample03() {

    const portalMaterial = useRef()

    useFrame((state, delta) => {
        portalMaterial.current.uTime += delta
    })

    return <>

        <Center top>
            <mesh scale={3}>
                <boxGeometry />
                <portalMaterial ref={portalMaterial} />
            </mesh>
        </Center>

        <DefaultGrid/>

        <directionalLight castShadow position={[0, 3, 5]} intensity={0.8} color={"#FF6666"} />
        <OrbitControls makeDefault />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li>Create custom shader</li>
                <li>Import glsl files</li>
                <li>Animate shader</li>
            </ul>
        </Html>
    </>
}
