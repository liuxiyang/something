
var s = new Set();  //s.clear()：清除所有成员，没有返回值

[2,3,5,4,5,2,2].map(x => s.add(x))

for (let i of s) {console.log(i)}
// 2 3 5 4



// 供了一种去除数组的重复元素的方法。
function dedupe(array) {
  return Array.from(new Set(array));
}
dedupe([1,1,2,3]) // [1, 2, 3]

let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];



// Set的写法
var properties = new Set();

properties.add("width");
properties.add("height");

if (properties.has(someName)) {
  // do something
}




// Set结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。
Set.prototype[Symbol.iterator] === Set.prototype.values
for (let x of set) { // for of
  console.log(x);
}