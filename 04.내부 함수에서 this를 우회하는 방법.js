var obj = {
  outer: function () {
    console.log(this) // obj

    var innerFunc1 = function () {
      console.log(this) // Window
    }
    innerFunc1()

    var self = this
    var innerFunc2 = function () {
      console.log(self) // obj
    }
    innerFunc2()
  }
}

obj.outer()