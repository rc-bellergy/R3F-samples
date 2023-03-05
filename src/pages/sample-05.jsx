
import { Center, OrbitControls, Environment, Html } from '@react-three/drei'
import MouseToy from '../components/MouseToy.jsx'
import DefaultGrid from '../components/DefaultGrid.jsx'

export default function Sample01() {

    return <>
        <MouseToy position={[-1.5, 0, -1.5]} />
        <MouseToy position={[-1.5, 0, 1.5]} />
        <MouseToy position={[1.5, 0, 1.5]} />
        <MouseToy position={[1.5, 0, -1.5]} />

        <Center bottom>
            <DefaultGrid />
        </Center>

        <directionalLight castShadow position={[0, 3, 5]} intensity={0.8} color={"#FF6666"} />
        <OrbitControls makeDefault />
        <Environment preset="city" />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li>Hover and Click events</li>
            </ul>
        </Html>
    </>
}

