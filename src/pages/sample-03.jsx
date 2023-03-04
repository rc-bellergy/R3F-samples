import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { shaderMaterial, OrbitControls, Html, Grid, Center } from '@react-three/drei'
import portalVertexShader from '../shaders/portal/vertex.glsl'
import portalFragmentShader from '../shaders/portal/fragment.glsl'

// Use `vite-plugin-glsl` to import glsl files,
// https://github.com/UstymUkhman/vite-plugin-glsl#usage

const PortalMaterial = shaderMaterial(
    {
        uTime: 0,
        uColorStart: new THREE.Color('#ffffff'),
        uColorEnd: new THREE.Color('#000000')
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

        <Grid
            position={[0, -0.01, 0]}
            cellThickness={1}
            cellColor={'#6f6f6f'}
            cellSize={0.5}
            sectionThickness={1.5}
            sectionColor={'#9d4b4b'}
            sectionSize={5}
            fadeDistance={40}
            fadeStrength={0.5}
            infiniteGrid={true}
        />

        <directionalLight castShadow position={[0, 3, 5]} intensity={0.8} color={"#FF6666"} />
        <OrbitControls makeDefault />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li>Custom Shader</li>
            </ul>
        </Html>
    </>
}