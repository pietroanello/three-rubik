const sides = {
  L: position => position.x < -0.5,
  R: position => position.x > 0.5,
  U: position => position.y > 0.5,
  D: position => position.y < -0.5,
  F: position => position.z > 0.5,
  B: position => position.z < -0.5,
  u: position => position.y > -0.5,
  d: position => position.y < 0.5,
  r: position => position.x > -0.5,
  l: position => position.x < 0.5,
  f: position => position.z > -0.5,
  b: position => position.z < 0.5,
  x: position => true,
  y: position => true,
  z: position => true,
  M: position => position.x > -0.5 && position.x < 0.5,
  E: position => position.y > -0.5 && position.y < 0.5,
  S: position => position.z > -0.5 && position.z < 0.5,
}

const detectAngle = operation => {
  const sign = operation.includes("'") ? 1 : -1
  const angle = operation.includes('2') ? 180 : operation.includes('3') ? 270 : 90

  return sign * angle
}

const axis = {
  L: 'x',
  R: 'x',
  U: 'y',
  D: 'y',
  F: 'z',
  B: 'z',
  X: 'x',
  Y: 'y',
  Z: 'z',
  M: 'x',
  E: 'y',
  S: 'z',
}

function _parseOperations(operations) {
  function parse(operation) {
    var array = []

    for (var i = 0; i < operation.length; i++) {
      if (operation[i] === "'" || operation[i] === '2' || operation[i] === '3')
        array[array.length - 1] += operation[i]
      else array.push(operation[i])
    }

    return array
  }

  return parse(operations)
}

export { sides, detectAngle, axis, _parseOperations }
