/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 iphone_13_pro.glb
Author: SDC PERFORMANCE™️ (https://sketchfab.com/3Duae)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-iphone-13-pro-2021-a35156d91cf44e70a2fdfeade54ae0b2
Title: (FREE) iPhone 13 Pro 2021
*/

import React, { useRef } from 'react'
import { useGLTF, Center, useScroll, Scroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'



export function Model(props) {

  const iPhoneRef = useRef()
  const { nodes, materials } = useGLTF('./models/iphone_13_pro.glb')
  
  const scroll = useScroll()
  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 3, 1 / 3)
    const r2 = scroll.range(1 / 3, 2 / 3)
    const r3 = scroll.range(2 / 3, 3 / 3)
    iPhoneRef.current.rotation.y = r1 * Math.PI
    iPhoneRef.current.rotation.x = r2 * Math.PI
    iPhoneRef.current.rotation.z = r3 * Math.PI
    console.log(r1,r2,r3)
  })

  return <>
    <group {...props} dispose={null} ref={iPhoneRef}>
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
          <mesh geometry={nodes.Object_13.geometry} material={materials.Display} />
          <mesh geometry={nodes.Object_14.geometry} material={materials['Lens.2']} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.material_11} />
        </Center>
      </group>
    </group>
  </>
}

useGLTF.preload('./models/iphone_13_pro.glb')
