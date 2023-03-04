import { memo } from 'react'
import { Grid, Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, useGLTF, Html } from '@react-three/drei'

export default function Sample02() {

    return <>
        <group position={[0, -0.5, 0]}>
            <Center top>
                <Suzi rotation={[-0.63, 0, 0]} scale={2} />
            </Center>
            <Center top position={[-2, 0, 2]}>
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
            <Shadows />
            <Grid
                position={[0, -0.01, 0]}
                cellThickness={1}
                cellColor={'#6f6f6f'}
                cellSize={0.5}
                sectionThickness={1.5}
                sectionColor={'#9d4b4b'}
                sectionSize={5}
                fadeDistance={40}
                fadeStrength={0.5}
                infiniteGrid={true}
            />
        </group>
        <OrbitControls makeDefault />
        <Environment preset="city" />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li>Grid</li>
                <li>AccumulativeShadows</li>
            </ul>
        </Html>
    </>
}

const Shadows = memo(() => (
    <AccumulativeShadows temporal frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
        <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
    </AccumulativeShadows>
))

function Suzi(props) {
    const { nodes } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/suzanne-high-poly/model.gltf')
    return (
        <mesh castShadow receiveShadow geometry={nodes.Suzanne.geometry} {...props}>
            <meshStandardMaterial color="#9d4b4b" />
        </mesh>
    )
}