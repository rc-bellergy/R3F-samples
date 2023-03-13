import { Outlet, Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Html } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>R3F Samples</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/`}>00 Introduction</Link>
                        </li>
                        <li>
                            <Link to={`/samples/01`}>01 Simple Animation</Link>
                        </li>
                        <li>
                            <Link to={`/samples/02`}>02 Grid & Shadows</Link>
                        </li>
                        <li>
                            <Link to={`/samples/03`}>03 Custom Shader</Link>
                        </li>
                        <li>
                            <Link to={`/samples/04`}>04 Particles Shader</Link>
                        </li>
                        <li>
                            <Link to={`/samples/05`}>05 Hover & Click Object</Link>
                        </li>
                        <li>
                            <Link to={`/samples/06`}>06 GLTF to Components</Link>
                        </li>
                        <li>
                            <Link to={`/samples/07`}>07 PivotControls</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Canvas shadows camera={{ position: [10, 12, 12], fov: 25 }} dpr={[1, 2]} >
                    <Suspense fallback={<Html wrapperClass={'description'} ><p>Loading...</p></Html>}>
                        <Outlet />
                    </Suspense>
                    <Perf position="top-right" />
                </Canvas>
            </div>
            <div id="footer" className='small-text'>
                <p>Craeted by <a href="https://designquest.com.hk">Design Quest Ltd.</a><br/>
                <a href="https://github.com/rc-bellergy/R3F-samples">GitHub source code</a></p>
            </div>

            

        </>
    )
}