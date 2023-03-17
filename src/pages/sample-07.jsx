import * as THREE from "three"
import { OrbitControls, Environment, Html, PivotControls, Center } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import { Model as Iphone13Pro } from '../components/Iphone_13_pro_mod.jsx'
import Loading from '../components/Loading.jsx'
import DefaultGrid from '../components/DefaultGrid.jsx'

// 

// References:
// Understanding quaternions
// https://eater.net/quaternions

export default function Sample07() {

    const iPhoneRef = useRef()

    const [quaternion, setQuaternion] = useState(new THREE.Quaternion())

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
                    setQuaternion(quaternion)
                }}>
                <Iphone13Pro scale={1.5} />
            </PivotControls>
        </Suspense>

        <mesh position={[0,0,3]} quaternion={quaternion}>
            <boxGeometry/>
            <meshStandardMaterial color={'#FF82A9'}/>
        </mesh>

        <DefaultGrid />

        <OrbitControls makeDefault />
        <Environment preset="city" />

        {/* Descriptions */}
        <Html wrapperClass={'drei-html'} style={{ left: "100px" }} >
            <h3>Quaternion</h3>
            <p> {`x:${quaternion.x}`}<br/>
                {`y:${quaternion.y}`}<br/>
                {`z:${quaternion.z}`}<br/>
                {`w:${quaternion.w}`}</p>
        </Html>

    </>
}
