import * as THREE from "three"
import { OrbitControls, Environment, Html, PivotControls } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import { Model as Iphone13Pro } from '../components/Iphone_13_pro_mod.jsx'
import Loading from '../components/Loading.jsx'


export default function Sample07() {

    const iPhoneRef = useRef()

    const [rotation, setRotation] = useState({})

    return <>
        <Suspense fallback={<Loading text='Loading iPhone' />} >
            <PivotControls
                onDrag={(l, dl, w, dw) => {
                    // Extract the position and rotation
                    const position = new THREE.Vector3()
                    const rotation = new THREE.Quaternion()
                    w.decompose(position, rotation, new THREE.Vector3())
                    console.log(rotation)
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
                <li>Get PivotControls position and rotation</li>
            </ul>
            <p>{data}</p>
        </Html>

    </>
}
