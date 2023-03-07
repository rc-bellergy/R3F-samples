import { OrbitControls, Environment, Html, Center } from '@react-three/drei'

import DefaultGrid from '../components/DefaultGrid.jsx'
import { Model as Iphone13Pro } from '../components/Iphone_13_pro.jsx'

export default function Sample06() {

    return <>
        <Center top>
            <Iphone13Pro />
        </Center>

        <DefaultGrid />
        <OrbitControls makeDefault />
        <Environment preset="city" />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li><a href="https://github.com/pmndrs/gltfjsx">gltf to jsx</a></li>
            </ul>
        </Html>
    </>
}
