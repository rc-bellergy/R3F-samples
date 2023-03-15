import { Environment, Html, ScrollControls, OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Suspense, useRef, useEffect } from 'react'
import { useControls } from 'leva'

import { Model as Iphone13Pro } from '../components/Iphone_13_pro_scroll.jsx'
import Loading from '../components/Loading.jsx'
import DefaultGrid from '../components/DefaultGrid.jsx'


export default function Sample08() {

    const leva = useControls({
        positionX:{
            value:10,
            min:0,
            max:20
        },
        positionY:{
            value:12,
            min:0,
            max:20
        },
        positionZ:{
            value:12,
            min:0,
            max:20
        }
    })

    // Get camera and update it 
    const camera = useThree(state => state.camera)
    camera.position.set(leva.positionX, leva.positionY, leva.positionZ)

    return <>
        <Suspense fallback={<Loading text='Loading iPhone' />} >
            <ScrollControls pages={3}>
                <Iphone13Pro scale={1.5} />
            </ScrollControls>
        </Suspense>

        <DefaultGrid />

        {/* <OrbitControls makeDefault /> */}

        <Environment preset="city" />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li>Get the camera</li>
                <li>Use Leva</li>
                <li>ScrollControls</li>
            </ul>
        </Html>
    </>
}
