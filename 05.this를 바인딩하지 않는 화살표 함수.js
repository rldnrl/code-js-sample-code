var obj = {
  outer: function () {
    console.log(this) // outer
    var innerFunc = () => {
      console.log(this) // outer
    }
    innerFunc()
  }
}

obj.outer()