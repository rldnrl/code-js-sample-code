# 코어 자바스크립트 책에 나오는 예제 코드

1. deepCopyObject.js
2. 실행 컨텍스트.js

## 호이스팅
### 매개변수와 변수에 대한 호이스팅
```js
function a(x) {
  console.log(x)
  var x
  console.log(x)
  var x = 2
  console.log(x)
}

a(1)
```

### 매개변수와 변수에 대한 호이스팅
```js
function a() {
  var x = 1
  console.log(x)
  var x
  console.log(x)
  var x = 2
  console.log(x)
}

a()
```

### 호이스팅을 마친 상태
```js
function a() {
  var x
  var x
  var x
  
  x = 1
  console.log(x) // 1
  console.log(x) // 1
  x = 2
  console.log(x) // 2
}
```

### 함수 선언에 대한 호이스팅

```js
function a() {
  console.log(b)
  var b = 'bbb'
  console.log(b)
  function b() {}
  console.log(b)
}

a()
```

### 함수 선언에 대한 호이스팅을 마친 상태

```js
function a() {
  var b
  function b() {}
  
  console.log(b)
  b = 'bbb'
  console.log(b)
  console.log(b)
}

a()
```

### 함수 선언문을 함수 표현식으로 바꾼 코드

```js
function a() {
  var b
  b = function b() {}
  
  console.log(b) // b 함수
  b = 'bbb'
  console.log(b) // 'bbb'
  console.log(b) // 'bbb'
}

a()
```


## 함수 선언식과 함수 표현식
### 함수를 선언하는 세 가지 방법

```js
function a() {}
a()

var b = function () {}
b()

var c = function d() {}
c() // 실행
d() // 에러
```

### 함수 선언문과 함수 표현식
```js
console.log(sum(1, 2))
console.log(multiply(3, 4))

function sum(a, b) {
  return a + b
}

var multiply = function (a, b) {
  return a * b
}
```

### 함수 선언문과 함수 표현식 - 호이스팅 마친 후
```js
var sum = function sum(a, b) { // 함수 선언문은 전체를 호이스팅
  return a + b
}

var multiply

console.log(sum(1, 2))
console.log(multiply(3, 4))

multiply = function (a, b) { // 변수의 할당부는 원래 자리에 남겨둔다
  return a * b
}
```