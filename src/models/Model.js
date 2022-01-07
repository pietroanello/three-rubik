import { useSpring, animated } from '@react-spring/three'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { animate, linear } from 'popmotion'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import rotateReact from '../utils/rotateReact'
import rotate from '../utils/rotate'
import { _parseOperations } from './../utils/constant'
import * as THREE from 'three'

export default function Model(props) {
  const { scene } = useThree()
  const group = useRef()
  const [kubez, setKubez] = useState([])
  const gltf = useGLTF('/animationTestBlender.glb')
  //const { actions } = useAnimations(animations, group)

  useEffect(() => {
    setTimeout(() => {
      //actions.spinningAction.play()
      rotate("RU'RUy", scene.children[1])
    }, 1000)
  }, [gltf])

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene.children[0]} />
    </Suspense>
  )
}

useGLTF.preload('/animationTestBlender.glb')
