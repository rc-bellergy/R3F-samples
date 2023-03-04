import { FileLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import DecodePNG from '../utils/decode_png'

export default function Sample03() {

    // useLoader(FileLoader, '/particles/box-scatter/p_16bit.png', '',  (xhr) => {
    //     console.log(xhr, (xhr.loaded / xhr.total) * 100 + '% loaded')
    // })

    return <>
        <File/>
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

function File() {
    const arraybuffer = useLoader(FileLoader,
        '/particles/box-scatter/p_16bit.png',
        (loader) => {
            loader.setResponseType('arraybuffer')
        }
    )
    const decode = new DecodePNG(arraybuffer, 16)
    console.log(decode)
    return <></>
}
