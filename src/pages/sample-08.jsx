import * as THREE from "three"
import { OrbitControls, Environment, Html, PivotControls, Center, ScrollControls } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import { Model as Iphone13Pro } from '../components/Iphone_13_pro_mod.jsx'
import Loading from '../components/Loading.jsx'
import DefaultGrid from '../components/DefaultGrid.jsx'


// References:
// Understanding quaternions
// https://eater.net/quaternions

export default function Sample07() {

    const iPhoneRef = useRef()

    const [data, setData] = useState(new THREE.Quaternion())

    return <>
        <Suspense fallback={<Loading text='Loading iPhone' />} >
            <Iphone13Pro scale={1.5} />
        </Suspense>

        <DefaultGrid />

        <ScrollControls/>
        <Environment preset="city" />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li>ScrollControls</li>
                <li></li>
            </ul>
        </Html>

    </>
}
