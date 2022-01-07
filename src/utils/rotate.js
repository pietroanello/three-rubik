import { sides, detectAngle, axis, _parseOperations } from './constant'
import * as THREE from 'three'
import { animate, cubicBezier } from 'popmotion'

function reparentObject3D(subject, newParent) {
  subject.matrix.copy(subject.matrixWorld)
  subject.applyMatrix4(newParent.matrixWorld.copy(new THREE.Matrix4()).invert())
  newParent.add(subject)
}

const rotate = (stringMoves, globalScene) => {
  const pivot = new THREE.Object3D()
  pivot.name = 'pivot'
  globalScene.add(pivot)

  let index = 0
  const moves = _parseOperations(stringMoves)

  const makeRotation = () => {
    const move = moves[index]
    const rotationAxe = axis[move[0].toUpperCase()]
    const angle = detectAngle(move)
    const arr = []
    globalScene.children.forEach(cube => {
      if (sides[move[0]](cube.position) && cube.name !== 'pivot') {
        arr.push(cube)
      }
    })
    arr.forEach(a => pivot.attach(a))
    animate({
      from: pivot.rotation[rotationAxe],
      to: THREE.MathUtils.degToRad(angle),
      duration: 500,
      ease: cubicBezier(0.6, 0.0, 0.4, 1),
      onUpdate: angle => {
        pivot.rotation[rotationAxe] = angle
      },
      onComplete: () => {
        const pos = {}
        const rot = {}
        pivot.children.forEach(c => {
          rot[c.uuid] = c.getWorldQuaternion(new THREE.Quaternion())
          pos[c.uuid] = c.getWorldPosition(new THREE.Vector3())
        })
        arr.forEach((c, index) => {
          c.setRotationFromQuaternion(rot[c.uuid])
          c.position.x = pos[c.uuid].x
          c.position.y = pos[c.uuid].y
          c.position.z = pos[c.uuid].z
          reparentObject3D(c, globalScene)
        })
        pivot.setRotationFromEuler(new THREE.Euler(0, 0, 0))
        index += 1
        if (index < moves.length) {
          makeRotation()
        }
      },
    })
  }
  makeRotation()
}

export default rotate
