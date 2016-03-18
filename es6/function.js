// 写法一
if (typeof y === 'undefined') {
  y = 'World';
}

// 写法二
if (arguments.length === 1) {
  y = 'World';
}

//es6
function log(x, y = 'World') {
  console.log(x, y);
}
function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
var p = new Point();
p // { x: 0, y: 0 }
function foo(x = 5) {
  let x = 1; // error
  const x = 2; // error
}

(function(a){}).length // 1
(function(a = 5){}).length // 0
(function(a, b, c = 5){}).length // 2