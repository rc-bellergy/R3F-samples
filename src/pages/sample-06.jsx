import { OrbitControls, Environment, Html, Center, Svg } from '@react-three/drei'
import { Suspense } from 'react'
import { Model as Iphone13Pro } from '../components/Iphone_13_pro.jsx'
import Loading from '../components/Loading.jsx'

export default function Sample06() {

    return <>
        <Suspense fallback={<Loading text='Loading iPhone'/>} >
            <Iphone13Pro />
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
                <li>Using Suspense and Laoding animation</li>
            </ul>
        </Html>
    </>
}
