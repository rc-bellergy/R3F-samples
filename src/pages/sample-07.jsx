import * as THREE from "three"
import { OrbitControls, Environment, Html, PivotControls, Center } from '@react-three/drei'
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
            <PivotControls
                depthTest={false}
                onDrag={(l, dl, w, dw) => {
                    // Extract the position, rotation ans scale
                    const position = new THREE.Vector3()
                    const quaternion = new THREE.Quaternion()
                    const scale = new THREE.Vector3()
                    w.decompose(position, quaternion, scale)
                    setData(quaternion)
                }}>
                <Iphone13Pro scale={1.5} />
            </PivotControls>
        </Suspense>

        <Center bottom>
            <DefaultGrid />
        </Center>

        <OrbitControls makeDefault />
        <Environment preset="city" />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li>PivotControls</li>
                <li>Extract rotation from PivotControls</li>
            </ul>
            <p>quaternion:</p>
            <p> {`x:${data.x}`}<br/>
                {`y:${data.y}`}<br/>
                {`z:${data.z}`}<br/>
                {`w:${data.w}`}</p>
        </Html>

    </>
}
