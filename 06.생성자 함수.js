var Cat = function (name, age) {
  this.bark = '야옹'
  this.name = name
  this.age = age
}

var choco = new Cat('초코', 6)
var nabi = new Cat('나비', 4)
console.log(choco, nabi)

/**
 * 결과
 * Cat { bark: '야옹', name: '초코', age: 6 }
 * Cat { bark: '야옹', name: '나비', age: 4 }
 */
