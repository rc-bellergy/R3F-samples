import * as THREE from "three"
import { OrbitControls, Environment, Html, PivotControls } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import { Model as Iphone13Pro } from '../components/Iphone_13_pro_mod.jsx'
import Loading from '../components/Loading.jsx'

// References:
// Understanding quaternions
// https://eater.net/quaternions

export default function Sample07() {

    const iPhoneRef = useRef()

    const [data, setData] = useState('')

    return <>
        <Suspense fallback={<Loading text='Loading iPhone' />} >
            <PivotControls
                depthTest={false}
                onDrag={(l, dl, w, dw) => {
                    // Extract the position, rotation ans scale
                    const position = new THREE.Vector3()
                    const quaternion = new THREE.Quaternion()
                    const scale = new THREE.Vector3()
                    w.decompose(position, quaternion, scale)
                    setData(`x:${quaternion.x}, y:${quaternion.y}, z:${quaternion.z}, w:${quaternion.w}`)
                }}>
                <Iphone13Pro scale={1.5} />
            </PivotControls>
        </Suspense>
        {/* <OrbitControls makeDefault /> */}
        <Environment preset="city" />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li>PivotControls</li>
                <li>Extract rotation from PivotControls</li>
            </ul>
            <h3>quaternion:</h3>
            <p>{data}</p>
        </Html>

    </>
}
