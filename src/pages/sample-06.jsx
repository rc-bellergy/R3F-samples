import { OrbitControls, Environment, Html, Float } from '@react-three/drei'
import { Suspense } from 'react'
import { Model as Iphone13Pro } from '../components/Iphone_13_pro_mod.jsx'
import Loading from '../components/Loading.jsx'

export default function Sample06() {

    return <>
        <Suspense fallback={<Loading text='Loading iPhone' />} >
            <Float>
                <Iphone13Pro scale={1.5}/>
            </Float>
        </Suspense>
        <OrbitControls makeDefault />
        <Environment preset="city" />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li><a href="https://github.com/pmndrs/gltfjsx">Using gltf to jsx</a></li>
                <li>Modify gltf components</li>
                <li>Embed HTML to components</li>
                <li>Using Suspense and show Loading...</li>
                <li>Using Float</li>
            </ul>
        </Html>
    </>
}
