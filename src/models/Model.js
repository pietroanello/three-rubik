import { useSpring, animated } from '@react-spring/three'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { animate, linear } from 'popmotion'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import rotateReact from '../utils/rotateReact'
import rotate from '../utils/rotate'
import { _parseOperations } from './../utils/constant'
import * as THREE from 'three'

export default function Model(props) {
  const { scene } = useThree()
  const group = useRef()
  const [kubez, setKubez] = useState([])
  const { nodes, materials, animations } = useGLTF('/animationTestBlender.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    setTimeout(() => {
      console.log(scene)
      //actions.spinningAction.play()
      rotate("RU'RUy", scene.children[1])
    }, 1000)
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_001.geometry}
        material={nodes.Cube_001.material}
        position={[0, 0, -2.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_002.geometry}
        material={nodes.Cube_002.material}
        position={[0, 0, 2.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_003.geometry}
        material={nodes.Cube_003.material}
        position={[-2.03, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_004.geometry}
        material={nodes.Cube_004.material}
        position={[-2.03, 0, -2.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_005.geometry}
        material={nodes.Cube_005.material}
        position={[-2.03, 0, 2.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <group position={[2.03, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6.geometry}
          material={nodes.Mesh_6.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6_1.geometry}
          material={nodes.Mesh_6_1.material}
        />
      </group>
      <group position={[2.03, 0, -2.03]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_7.geometry}
          material={nodes.Mesh_7.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_7_1.geometry}
          material={nodes.Mesh_7_1.material}
        />
      </group>
      <group position={[2.03, 0, 2.03]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_8.geometry}
          material={nodes.Mesh_8.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_8_1.geometry}
          material={nodes.Mesh_8_1.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_009.geometry}
        material={nodes.Cube_009.material}
        position={[0, 2.03, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_27.geometry}
          material={materials.Eyes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_27_1.geometry}
          material={nodes.Mesh_27_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_27_2.geometry}
          material={materials.Pig_no_uv}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_27_3.geometry}
          material={nodes.Mesh_27_3.material}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_010.geometry}
        material={nodes.Cube_010.material}
        position={[0, 2.03, -2.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_30.geometry}
          material={nodes.Mesh_30.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_30_1.geometry}
          material={nodes.Mesh_30_1.material}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_011.geometry}
        material={nodes.Cube_011.material}
        position={[0, 2.03, 2.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_33.geometry}
          material={nodes.Mesh_33.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_33_1.geometry}
          material={nodes.Mesh_33_1.material}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_012.geometry}
        material={nodes.Cube_012.material}
        position={[-2.03, 2.03, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_28.geometry}
          material={nodes.Mesh_28.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_28_1.geometry}
          material={nodes.Mesh_28_1.material}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_013.geometry}
        material={nodes.Cube_013.material}
        position={[-2.03, 2.03, -2.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_29.geometry}
          material={nodes.Mesh_29.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_29_1.geometry}
          material={nodes.Mesh_29_1.material}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_014.geometry}
        material={nodes.Cube_014.material}
        position={[-2.03, 2.03, 2.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_015.geometry}
        material={nodes.Cube_015.material}
        position={[2.03, 2.03, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_32.geometry}
          material={nodes.Mesh_32.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_32_1.geometry}
          material={nodes.Mesh_32_1.material}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_016.geometry}
        material={nodes.Cube_016.material}
        position={[2.03, 2.03, -2.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_31.geometry}
          material={nodes.Mesh_31.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_31_1.geometry}
          material={nodes.Mesh_31_1.material}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_017.geometry}
        material={nodes.Cube_017.material}
        position={[2.03, 2.03, 2.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_018.geometry}
        material={nodes.Cube_018.material}
        position={[0, -2.03, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_019.geometry}
        material={nodes.Cube_019.material}
        position={[0, -2.03, -2.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_020.geometry}
        material={nodes.Cube_020.material}
        position={[0, -2.03, 2.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_021.geometry}
        material={nodes.Cube_021.material}
        position={[-2.03, -2.03, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_022.geometry}
        material={nodes.Cube_022.material}
        position={[-2.03, -2.03, -2.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_023.geometry}
        material={nodes.Cube_023.material}
        position={[-2.03, -2.03, 2.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <group position={[2.03, -2.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_24.geometry}
          material={nodes.Mesh_24.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_24_1.geometry}
          material={nodes.Mesh_24_1.material}
        />
      </group>
      <group position={[2.03, -2.03, -2.03]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_25.geometry}
          material={nodes.Mesh_25.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_25_1.geometry}
          material={nodes.Mesh_25_1.material}
        />
      </group>
      <group position={[2.03, -2.03, 2.03]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_26.geometry}
          material={nodes.Mesh_26.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_26_1.geometry}
          material={nodes.Mesh_26_1.material}
        />
      </group>
      <group position={[-220, 220, -220]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/animationTestBlender.glb')
