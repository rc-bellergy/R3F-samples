import { memo } from 'react'
import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, Html, Billboard, Text } from '@react-three/drei'

import DefaultGrid from '../components/DefaultGrid.jsx'
import Suzi from '../components/Suzi'


export default function Sample06() {

    return <>
        
        <DefaultGrid/>
        <OrbitControls makeDefault />
        <Environment preset="city" />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li>Grid</li>
                <li>AccumulativeShadows</li>
            </ul>
        </Html>
    </>
}

const Shadows = memo(() => (
    <AccumulativeShadows temporal frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
        <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
    </AccumulativeShadows>
))
