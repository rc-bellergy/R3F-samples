import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { shaderMaterial, OrbitControls, Html, Grid, Center } from '@react-three/drei'
import vertexShader from '../shaders/matrix/vertex.glsl'
import fragmentShader from '../shaders/matrix/fragment.glsl'
import DefaultGrid from '../components/DefaultGrid.jsx'

// Use `vite-plugin-glsl` to import glsl files,
// https://github.com/UstymUkhman/vite-plugin-glsl#usage

const MatrixMaterial = shaderMaterial(
    {
        u_mouse: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
        u_resolution: { x: window.innerWidth, y: window.innerHeight },
        u_time: 0.0 
    },
    vertexShader,
    fragmentShader
)

extend({ MatrixMaterial })

export default function Sample03() {

    const matrixMaterial = useRef()

    useFrame((state, delta) => {
        matrixMaterial.current.u_time += delta
    })

    return <>

        <Center top>
            <mesh scale={3}>
                <boxGeometry />
                <matrixMaterial ref={matrixMaterial} />
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
                <li>Import shader (glsl) files</li>
                <li>Animate shader</li>
            </ul>
        </Html>
    </>
}
