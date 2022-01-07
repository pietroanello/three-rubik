import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'

export default function Model(props) {
  const ref = useRef()
  const [kubez, setKubez] = useState([])
  const { nodes, materials, animations } = useGLTF('/animationTestBlender.glb')
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
    actions?.spinningAction.play()
    Object.keys(nodes).forEach(key => {
      nodes[key]?.parent?.name === 'Root' && setKubez(prev => [...prev, nodes[key]])
    })
  }, [])

  useEffect(() => {
    kubez.length > 0 && console.log(kubez)
  }, [kubez])

  return (
    <group ref={ref} {...props} dispose={null}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_001.geometry}
          material={nodes.Cube_001.material}
          position={[0, 0, -2.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_002.geometry}
          material={nodes.Cube_002.material}
          position={[0, 0, 2.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_004.geometry}
          material={nodes.Cube_004.material}
          position={[-2.2, 0, -2.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_005.geometry}
          material={nodes.Cube_005.material}
          position={[-2.2, 0, 2.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group position={[2.2, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_5.geometry}
            material={nodes.Mesh_5.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_5_1.geometry}
            material={nodes.Mesh_5_1.material}
          />
        </group>
        <group position={[2.2, 0, -2.2]} rotation={[-Math.PI / 2, 0, 0]}>
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
        <group position={[2.2, 0, 2.2]} rotation={[-Math.PI / 2, 0, 0]}>
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_009.geometry}
          material={nodes.Cube_009.material}
          position={[0, 2.2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_010.geometry}
          material={nodes.Cube_010.material}
          position={[0, 2.2, -2.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_011.geometry}
          material={nodes.Cube_011.material}
          position={[0, 2.2, 2.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_012.geometry}
          material={nodes.Cube_012.material}
          position={[-2.2, 2.2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            name='spinning'
            castShadow
            receiveShadow
            geometry={nodes.spinning.geometry}
            material={nodes.spinning.material}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_013.geometry}
          material={nodes.Cube_013.material}
          position={[-2.2, 2.2, -2.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PolySphere.geometry}
            material={nodes.PolySphere.material}
            position={[-0.02, 0, 1.52]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_014.geometry}
          material={nodes.Cube_014.material}
          position={[-2.2, 2.2, 2.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group position={[2.2, 2.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_14.geometry}
            material={nodes.Mesh_14.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_14_1.geometry}
            material={nodes.Mesh_14_1.material}
          />
        </group>
        <group position={[2.2, 2.2, -2.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_15.geometry}
            material={nodes.Mesh_15.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_15_1.geometry}
            material={nodes.Mesh_15_1.material}
          />
        </group>
        <group position={[2.2, 2.2, 2.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_16.geometry}
            material={nodes.Mesh_16.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_16_1.geometry}
            material={nodes.Mesh_16_1.material}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_018.geometry}
          material={nodes.Cube_018.material}
          position={[0, -2.2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_019.geometry}
          material={nodes.Cube_019.material}
          position={[0, -2.2, -2.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_020.geometry}
          material={nodes.Cube_020.material}
          position={[0, -2.2, 2.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_021.geometry}
          material={nodes.Cube_021.material}
          position={[-2.2, -2.2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_022.geometry}
          material={nodes.Cube_022.material}
          position={[-2.2, -2.2, -2.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_023.geometry}
          material={nodes.Cube_023.material}
          position={[-2.2, -2.2, 2.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group position={[2.2, -2.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_23.geometry}
            material={nodes.Mesh_23.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_23_1.geometry}
            material={nodes.Mesh_23_1.material}
          />
        </group>
        <group position={[2.2, -2.2, -2.2]} rotation={[-Math.PI / 2, 0, 0]}>
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
        <group position={[2.2, -2.2, 2.2]} rotation={[-Math.PI / 2, 0, 0]}>
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
        <group position={[-220, 220, -220]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/animationTestBlender.glb')
