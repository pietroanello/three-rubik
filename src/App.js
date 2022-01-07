import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import './App.css'
import Model from './models/Model'

const App = () => {
  return (
    <Canvas
      colorManagement
      style={{ background: '#171717' }}
      camera={{ position: [15, 15, 10], fov: 45 }}
    >
      <directionalLight />
      <OrbitControls />
      <Suspense fallback={null}>
        <Environment preset='city' />
        <Model />
      </Suspense>
    </Canvas>
  )
}

export default App
