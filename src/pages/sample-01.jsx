import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Center, OrbitControls, Environment, Html } from '@react-three/drei'

import Suzi from '../components/Suzi'

export default function Sample01() {

    const suziRef = useRef()
    const sphereRef = useRef()

    useFrame((state, delta) => {
        suziRef.current.rotation.y += delta
        sphereRef.current.position.y = Math.sin(suziRef.current.rotation.y) + 1
    })

    return <>
        <group position={[0, -0.5, 0]}>
            <Center top ref={suziRef}>
                <Suzi rotation={[-0.63, 0, 0]} scale={2} />
            </Center>
            <Center top position={[-2, 0, 2]} ref={sphereRef}>
                <mesh castShadow>
                    <sphereGeometry args={[0.5, 64, 64]} />
                    <meshStandardMaterial color="#9d4b4b" />
                </mesh>
            </Center>
            <Center top position={[2.5, 0, 1]}>
                <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
                    <boxGeometry args={[0.7, 0.7, 0.7]} />
                    <meshStandardMaterial color="#9d4b4b" />
                </mesh>
            </Center>
            <mesh receiveShadow position-y={-0.02} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color={'#333333'} />
            </mesh>
        </group>
        <directionalLight castShadow position={[0, 3, 5]} intensity={0.8} color={"#FF6666"} />
        <OrbitControls makeDefault />
        <Environment preset="city" />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li>Simple animation</li>
                <li>Load GLTF file</li>
                <li>Simple shadow</li>
            </ul>
        </Html>
    </>
}
