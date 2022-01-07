import React from 'react'
import { Group } from 'three'
import { sides, detectAngle, axis, _parseOperations } from './constant'

const rotateReact = (moves, index, kubez) => {
  const arr = []
  const names = []
  const move = moves[index]
  const rotationAxe = axis[move[0].toUpperCase()]
  const angle = detectAngle(move)

  kubez.current.forEach((kube, index) => {
    if (sides[move[0]](kube.position) && kube.name.includes('C')) {
      arr.push(kube)
      names.push(kube.name)
    }
  })

  const newArr = kubez.current.filter(kube => !names.includes(kube.name))

  return { newKubez: newArr, kubezToBe: arr }
}

export default rotateReact
