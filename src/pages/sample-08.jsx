import { Environment, Html, ScrollControls, OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Suspense, useRef, useEffect } from 'react'
import * as THREE from 'three'

import { Model as Iphone13Pro } from '../components/Iphone_13_pro_scroll.jsx'
import Loading from '../components/Loading.jsx'
import DefaultGrid from '../components/DefaultGrid.jsx'


export default function Sample08() {

    // Override 
    const set = useThree((state) => state.set)
    const camera = new THREE.PerspectiveCamera(25)
    camera.positionZ = 10
    
    useEffect(() => {
        set({ 
            camera: camera
        })
        console.log('Override camera')
      }, [])

    return <>
        <Suspense fallback={<Loading text='Loading iPhone' />} >
            <ScrollControls pages={3}>
                <Iphone13Pro scale={1.5} />
            </ScrollControls>
        </Suspense>

        <DefaultGrid />

        <OrbitControls makeDefault />

        <Environment preset="city" />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li>ScrollControls</li>
            </ul>
        </Html>
    </>
}
