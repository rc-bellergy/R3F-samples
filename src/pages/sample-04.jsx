import { OrbitControls, Html, Grid } from '@react-three/drei'
import Particles from '../components/Particles.jsx'

export default function Sample04() {

    return <>
        <mesh scale={4}>
            <Particles
                positionFile={'./particles/box-scatter/p_16bit.png'}
                colorFile={'./particles/box-scatter/color.png'}
                particlesSize={90}
            />
        </mesh>

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

