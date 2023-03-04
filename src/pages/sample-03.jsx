import { memo } from 'react'
import { AccumulativeShadows, RandomizedLight, OrbitControls, Html } from '@react-three/drei'



export default function Sample02() {

    return <>
        <OrbitControls makeDefault />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li>load PNG file</li>
                <li>Render particles with shader</li>
            </ul>
        </Html>
    </>
}

const Shadows = memo(() => (
    <AccumulativeShadows temporal frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
        <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
    </AccumulativeShadows>
))
