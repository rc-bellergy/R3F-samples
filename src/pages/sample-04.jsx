import { FileLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import { OrbitControls, Html, shaderMaterial } from '@react-three/drei'
import DecodePNG from '../utils/decode_png'
import vertex from '../shaders/pointcloud/vertex.glsl'
import fragment from '../shaders/pointcloud/fragment.glsl'

export default function Sample04() {

    return <>
        <Particles
            positionFile={'/particles/box-scatter/p_16bit.png'}
            colorFile={'/particles/box-scatter/color.png'} 
        />
        <OrbitControls makeDefault />

        {/* Descriptions */}
        <Html wrapperClass={'description'} fullscreen>
            <h3>Sample of</h3>
            <ul>
                <li>load PNG file</li>
                <li>Render particles with shader</li>
            </ul>
        </Html>
    </>
}

function Particles(props) {
    const positionData = useLoader(FileLoader,
        props.positionFile,
        (loader) => {
            loader.setResponseType('arraybuffer')
        }
    )
    const colorData = useLoader(FileLoader,
        props.colorFile,
        (loader) => {
            loader.setResponseType('arraybuffer')
        }
    )

    const position = new DecodePNG(positionData, 16)
    const color = new DecodePNG(colorData, 16)

    console.log('color', color)
    console.log('position', position)


    
    return <></>
}
