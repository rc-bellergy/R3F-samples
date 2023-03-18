import { Environment, Html, ScrollControls, OrbitControls, AccumulativeShadows, RandomizedLight, SoftShadows, PivotControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Suspense, useRef, useEffect, memo } from 'react'
import { useControls } from 'leva'

import { Model as Kuma } from '../components/Kuma.jsx'
import Loading from '../components/Loading.jsx'
import DefaultGrid from '../components/DefaultGrid.jsx'


export default function Sample08() {

    // Get camera and update it 
    const camera = useThree(state => state.camera)
    camera.position.set(15, 22, 20)

    const softShadowsConfig = useControls('SoftShadows',{
        enabled: true,
        size: { value: 25, min: 0, max: 100 },
        focus: { value: 0, min: 0, max: 2 },
        samples: { value: 10, min: 1, max: 20, step: 1 }
    })

    const fogConfig  = useControls('Fog',{
        enabled: true,
        color: '#86827c',
        near: { value:27, min: 0, max:100 },
        far: { value:40, min: 0, max:100 }
    })

    return <>

        {/* Animation model */}
        <Suspense fallback={<Loading text='Loading model' />} >
            <Kuma position={[0, 5.2, 0]} />
        </Suspense>

        <mesh receiveShadow position={[-1, 0.5, -2]}>
            <boxGeometry args={[1, 1, 4]} />
            <meshLambertMaterial />
        </mesh>

        {/* SoftShadows */}
        {softShadowsConfig.enabled && <SoftShadows {...softShadowsConfig} />}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <shadowMaterial transparent opacity={0.4} />
        </mesh>
        <directionalLight castShadow position={[2.5, 8, 5]} intensity={1.5} shadow-mapSize={1024}>
            <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
        </directionalLight>
        <ambientLight intensity={0.5} />


        {fogConfig.enabled && <fog attach="fog" args={[fogConfig.color, fogConfig.near, fogConfig.far]} />}

        <DefaultGrid sectionColor={'#7f6f6f'} fadeDistance={50} />

        <OrbitControls autoRotate autoRotateSpeed={0.5}
            enablePan={false} enableZoom={false}
            minPolarAngle={Math.PI / 3.5} maxPolarAngle={Math.PI / 2.1}
        />

        <Environment preset="sunset" background blur={0.7} />

    </>
}
