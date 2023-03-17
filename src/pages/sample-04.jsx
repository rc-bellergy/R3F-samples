import { OrbitControls, Html, Grid } from '@react-three/drei'
import Particles from '../components/Particles.jsx'
import DefaultGrid from '../components/DefaultGrid.jsx'

export default function Sample04() {

    return <>
        <mesh scale={4}>
            <Particles
                positionFile={'./particles/box-scatter/p_16bit.png'}
                colorFile={'./particles/box-scatter/color.png'}
                particlesSize={90}
            />
        </mesh>

        <DefaultGrid/>

        <OrbitControls makeDefault />

    </>
}

