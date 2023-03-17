import { Outlet, NavLink, useHref } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Html } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Root() {

    const href = useHref()
    // console.log(href)

    return (
        <>
            <div id="index" >
                <nav>
                    {/* Main menu */}
                    <ul hidden={href != '#/'}>
                        <li className={'page-title'}>
                            <NavLink to={`/samples/01`}>01 Simple Animation</NavLink>
                            <ul>
                                <li>Simple animation</li>
                                <li>Load GLTF file</li>
                                <li>Simple shadow</li>
                            </ul>
                        </li>
                        <li className={'page-title'}>
                            <NavLink to={`/samples/02`}>02 Grid & Shadows</NavLink>
                            <ul>
                                <li>Grid</li>
                                <li>AccumulativeShadows</li>
                            </ul>
                        </li>
                        <li className={'page-title'}>
                            <NavLink to={`/samples/03`}>03 Custom Shader</NavLink>
                            <ul>
                                <li>Create custom shader</li>
                                <li>Import shader (glsl) files</li>
                                <li>Animate shader</li>
                            </ul>
                        </li >
                        <li className={'page-title'}>
                            <NavLink to={`/samples/04`}>04 Particles Shader</NavLink>
                            <ul>
                                <li>Load particles position and color data form PNG files</li>
                                <li>Render particles with custom ParticlesShader</li>
                            </ul>
                        </li>
                        <li className={'page-title'}>
                            <NavLink to={`/samples/05`}>05 Hover & Click Object</NavLink>
                            <ul>
                                <li>Hover and Click events</li>
                            </ul>
                        </li>
                        <li className={'page-title'}>
                            <NavLink to={`/samples/06`}>06 GLTF to Components</NavLink>
                            <ul>
                                <li><a href="https://github.com/pmndrs/gltfjsx">Using gltf to jsx</a></li>
                                <li>Modify gltf components</li>
                                <li>Embed HTML to components</li>
                                <li>Using Suspense and show Loading...</li>
                                <li>Using Float</li>
                            </ul>
                        </li>
                        <li className={'page-title'}>
                            <NavLink to={`/samples/07`}>07 PivotControls</NavLink>
                            <ul>
                                <li>PivotControls</li>
                                <li>Extract rotation from PivotControls</li>
                                <li>Copy rotation from one object to other</li>
                            </ul>
                        </li>
                    </ul>
                    {/* Back to Mian menu */}
                    <ul hidden={href == '#/'}>
                        <li className={'page-title'}>
                            <NavLink to={`/`}>Back to Index</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Content Page */}
            <div id="detail" hidden={href == '#/'}>
                <Canvas shadows camera={{ position: [10, 12, 12], fov: 25 }} dpr={[1, 2]} >
                    <Suspense fallback={<Html wrapperClass={'description'} ><p>Loading...</p></Html>}>
                        <Outlet />
                    </Suspense>
                    <Perf position="bottom-left" />
                </Canvas>
            </div>

            <div id="footer" className='small-text'>
                <p>Craeted by <a href="https://designquest.com.hk">Design Quest Ltd.</a><br />
                    <a href="https://github.com/rc-bellergy/R3F-samples">GitHub source code</a></p>
            </div>
        </>
    )
}