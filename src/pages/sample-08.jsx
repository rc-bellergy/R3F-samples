import { Environment, OrbitControls, SoftShadows, ScrollControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Suspense } from 'react'
import { useControls } from 'leva'

import { Model as Kuma } from '../components/Kuma.jsx'
import Loading from '../components/Loading.jsx'
import DefaultGrid from '../components/DefaultGrid.jsx'


export default function Sample08() {

    // Get camera and update it 
    const camera = useThree(state => state.camera)
    camera.position.set(15, 22, 20)

    const softShadowsConfig = useControls('SoftShadows', {
        enabled: true,
        size: { value: 25, min: 0, max: 100 },
        focus: { value: 0, min: 0, max: 2 },
        samples: { value: 10, min: 1, max: 20, step: 1 }
    })

    const fogConfig = useControls('Fog', {
        enabled: true,
        color: '#626262',
        near: { value: 33, min: 0, max: 100 },
        far: { value: 40, min: 0, max: 100 }
    })

    return <>

        {/* Scroll animation model:
            - ScrollControls is the parent component that contained the animated models
            - The animation defined in the <Kuma> model
            */}
        <ScrollControls pages={2}>{/* When set pages=2, we have (0-2) total 3 pages (vh) */}
            <Suspense fallback={<Loading text='Loading model' />} >
                <Kuma position={[0, 5.2, 0]} />
            </Suspense>
        </ScrollControls>

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

        {/* Fog */}
        {fogConfig.enabled && <fog attach="fog" args={[fogConfig.color, fogConfig.near, fogConfig.far]} />}

        <DefaultGrid sectionColor={'#7f6f6f'} fadeDistance={50} />

        <Environment preset="sunset" background blur={0.7} />

        <OrbitControls autoRotate autoRotateSpeed={-0.5}
            enablePan={false} enableZoom={false}
            minPolarAngle={Math.PI / 3.5} maxPolarAngle={Math.PI / 2.1}
        />


    </>
}
