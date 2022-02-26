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