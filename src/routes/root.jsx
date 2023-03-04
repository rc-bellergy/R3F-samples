import { Outlet, Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'


export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>R3F Samples</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/samples/01`}>01 Simple Animation</Link>
                        </li>
                        <li>
                            <Link to={`/samples/02`}>02 Grid & Shadows </Link>
                        </li>
                        <li>
                            <Link to={`/samples/03`}>03 Particles Shader </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Canvas shadows camera={{ position: [10, 12, 12], fov: 25 }}>
                    <Outlet />
                </Canvas>
            </div>
        </>
    )
}