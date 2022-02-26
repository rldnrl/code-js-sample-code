function copyObjectDeep (target) {
  var result = {}

  if (typeof target === "object" && target !== null) {
    for (const prop in target) {
      result[prop] = copyObjectDeep(target[prop])
    }
  } else {
    result = target
  }

  return result
}

var target = {
  a: 1,
  b: 2,
  c: 'aaa'
}

console.log(copyObjectDeep(target))

var deepObject = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f: {
      g: '123',
      h: true
    }
  }
}

console.log(deepObject)