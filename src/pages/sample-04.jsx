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

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li>Load particles position and color data form PNG files</li>
                <li>Render particles with custom ParticlesShader</li>
            </ul>
        </Html>
    </>
}

