import { Environment, Html, ScrollControls, OrbitControls, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Suspense, useRef, useEffect, memo } from 'react'
import { useControls } from 'leva'

import { Model as Kuma } from '../components/Kuma.jsx'
import Loading from '../components/Loading.jsx'
import DefaultGrid from '../components/DefaultGrid.jsx'


export default function Sample08() {

    // Get camera and update it 
    const camera = useThree(state => state.camera)
    camera.position.set(15,22,20)

    return <>
        <Suspense fallback={<Loading text='Loading model' />} >
            <Kuma position={[0, 5.2, 0]}/>
        </Suspense>

        <AccumulativeShadows temporal frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
            <RandomizedLight amount={8} radius={4} position={[5, 3, -5]} />
        </AccumulativeShadows>

        <OrbitControls autoRotate autoRotateSpeed={0.5} 
            enablePan={false} enableZoom={false} 
            minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1}
            />

        <Environment preset="sunset" background blur={0.7} />

    </>
}
