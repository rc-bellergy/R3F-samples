import { Environment, Html, ScrollControls } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { Model as Iphone13Pro } from '../components/Iphone_13_pro_scroll.jsx'
import Loading from '../components/Loading.jsx'
import DefaultGrid from '../components/DefaultGrid.jsx'


export default function Sample08() {

    return <>
        <Suspense fallback={<Loading text='Loading iPhone' />} >
            <ScrollControls pages={3}>
                <Iphone13Pro scale={1.5} />
            </ScrollControls>
        </Suspense>

        <DefaultGrid />

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
