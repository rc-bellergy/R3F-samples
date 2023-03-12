import { OrbitControls, Environment, Html, Float, Clone } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { Model as Iphone13Pro } from '../components/Iphone_13_pro.jsx'
import Loading from '../components/Loading.jsx'


export default function Sample07() {

    const iphoneRef = useRef()

    return <>
        <Suspense fallback={<Loading text='Loading iPhone' />} >
            <Float ref={iphoneRef}>
                <Iphone13Pro scale={1.5}/>
            </Float>
        </Suspense>
        <OrbitControls makeDefault />
        <Environment preset="city" />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li>ScrollControl</li>
            </ul>
            <p className='small-text'>Credit of the model creator:<br/>
            <a href="https://sketchfab.com/3d-models/free-iphone-13-pro-2021-a35156d91cf44e70a2fdfeade54ae0b2">(FREE) iPhone 13 Pro 2021</a> by <a href="https://sketchfab.com/3Duae">SDC PERFORMANCE™️</a>
            </p>
        </Html>

    </>
}
