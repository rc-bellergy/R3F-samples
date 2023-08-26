import { useGLTF } from '@react-three/drei'

export default function Suzi(props) {
    const { nodes } = useGLTF('./models/Suzanne/glTF/Suzanne.gltf')
    return (
        <mesh castShadow receiveShadow geometry={nodes.Suzanne.geometry} {...props}>
            <meshStandardMaterial color="#9d4b4b" />
        </mesh>
    )
}