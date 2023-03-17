import { OrbitControls, Html, Grid } from '@react-three/drei'
import Particles from '../components/Particles.jsx'
import DefaultGrid from '../components/DefaultGrid.jsx'

export default function Sample04() {

    return <>
        <mesh scale={20}>
            <Particles
                positionFile={'./particles/big-buddha/p_16bit.png'}
                colorFile={'./particles/big-buddha/color.png'}
                particlesSize={50}
            />
        </mesh>

        <DefaultGrid/>

        <OrbitControls makeDefault />

    </>
}

