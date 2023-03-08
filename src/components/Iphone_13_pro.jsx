/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 iphone_13_pro.glb
Author: SDC PERFORMANCE™️ (https://sketchfab.com/3Duae)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-iphone-13-pro-2021-a35156d91cf44e70a2fdfeade54ae0b2
Title: (FREE) iPhone 13 Pro 2021
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture, Html, Center } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('./models/iphone_13_pro.glb')
  const texture = useTexture('./textures/iphone-wallpaper.jpg')
  const bodyRef = useRef()
  return (
    <group {...props} dispose={null}>
      <group scale={0.05}>
        <Center>
          <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.Black} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.Back} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.GOLD} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.BARRES} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.Labber} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.GLASS} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.Lenscover} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.material} />
          {/* <mesh geometry={nodes.Object_13.geometry} material={materials.Display} /> */}
          {/* override original texture */}
          <mesh useRef={bodyRef} geometry={nodes.Object_13.geometry}>
            <meshStandardMaterial map={texture} />
          </mesh>
          <mesh geometry={nodes.Object_14.geometry} material={materials['Lens.2']} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.material_11} />
        </Center>
        {/* Add custom content */}
        <group rotation-y={Math.PI * 0.5} scale={6} position={[2.85, 0, 0]}>
          <Html transform occlude={bodyRef}>
            <div id="iphone-content">
              <h1>Hello!</h1>
              <img src="./images/contents/120515.gif" draggable="false"/>
              <p>Allows you to tie HTML content to any object of your scene. It will be projected to the objects whereabouts automatically.</p>
            </div>
          </Html>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/iphone_13_pro.glb')
