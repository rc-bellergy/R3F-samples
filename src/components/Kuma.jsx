/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 kuma_heavy_robot_r-9000s.glb --transform --simplify
Author: Heinrich (https://sketchfab.com/Gevalt)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/kuma-heavy-robot-r-9000s-8b77bdbe705f4e9697790fd404da49a9
Title: KUMA Heavy Robot R-9000S
*/

import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, useScroll, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

export function Model(props) {
  const kima = useRef()
  const { nodes, materials, animations } = useGLTF('./models/kuma_heavy_robot_r-9000s-transformed.glb')
  const { actions } = useAnimations(animations, kima)
  const scroll = useScroll()

  // Show the scroll offset to Leva control
  // https://github.com/pmndrs/leva/blob/main/docs/advanced/controlled-inputs.md#set
  const [{ offset }, set] = useControls('Scroll', () => ( {
    offset: 0
  }))

  // Pause animation when init
  useEffect(() => {
    actions.Track.play().paused = true
  }, [])

  // update animation by scroll offset
  useFrame((state, delta) => {
    const action = actions.Track
    set({ offset: 1 - scroll.offset }) // offset: 1-0
    action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
    console.log(action.time)
  })

  return <>
    <group ref={kima} {...props} dispose={null} scale={0.003}>
      <group name="Armature" position={[-866.65, 1714.41, 8.21]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="skin" castShadow receiveShadow geometry={nodes.Object_19.geometry} material={materials['Material.002']} skeleton={nodes.Object_19.skeleton} />
        {/* <skinnedMesh name="outline" geometry={nodes.Object_21.geometry} material={materials['Material.001']} skeleton={nodes.Object_21.skeleton} /> */}
      </group>
    </group>

    {/* Descriptions */}
    <Html wrapperClass={'drei-html'} fullscreen >
        <div className={'page-view'}><h1 className={'center black'}>Scroll Page 0</h1></div>
        <div className={'page-view'}><h1 className={'center black'}>Scroll Page 1</h1></div>
        <div className={'page-view'}><h1 className={'center black'}>Scroll Page 2</h1></div>
    </Html>
  </>
}

// useGLTF.preload('./models/kuma_heavy_robot_r-9000s-transformed.glb')
