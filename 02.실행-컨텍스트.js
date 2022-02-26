var a = 3

function outer() {
  function inner() {
    console.log(a) // undefined
    var a = 1
  }
  inner()
  console.log(a) // 3
}

outer()
console.log(a) // 3